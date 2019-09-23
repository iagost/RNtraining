import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dimensions, StyleSheet } from 'react-native';

import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';
import ShakingText from './shakingText';

const { width } = Dimensions.get('window');

export default class Biometria extends Component{

    constructor(props) {
        super(props);
        this.state = { errorMessage: undefined, biometric: undefined };
      }
    
      componentDidMount() {
        FingerprintScanner
          .authenticate({ onAttempt: this.handleAuthenticationAttempted })
          .then(() => {
            this.props.handlePopupDismissed();
            Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
          })
          .catch((error) => {
            this.setState({ errorMessage: error.message, biometric: error.biometric });
            this.description.shake();
          });
      }
    
      componentWillUnmount() {
        FingerprintScanner.release();
      }
    
      handleAuthenticationAttempted = (error) => {
        this.setState({ errorMessage: error.message });
        this.description.shake();
      };
    
      render() {
        const { errorMessage, biometric } = this.state;
        const { style, handlePopupDismissed } = this.props;
    
        return (
          <View style={styles.container}>
            <View style={[styles.contentContainer, style]}>
    
              <Image
                style={styles.logo}
                source={require('../assets/finger_print.png')}
              />
    
              <Text style={styles.heading}>
                Biometric{'\n'}Authentication
              </Text>
              <ShakingText
                ref={(instance) => { this.description = instance; }}
                style={styles.description(!!errorMessage)}>
                {errorMessage || `Scan your ${biometric} on the\ndevice scanner to continue`}
              </ShakingText>
    
              <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handlePopupDismissed}
              >
                <Text style={styles.buttonText}>
                  BACK TO MAIN
                </Text>
              </TouchableOpacity>
    
            </View>
          </View>
        );
      }
}

Biometria.propTypes = {
    style: ViewPropTypes.style,
    handlePopupDismissed: PropTypes.func.isRequired,
  };


  const styles = StyleSheet.create({

    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(0, 164, 222, 0.9)',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      },
      contentContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
      },
      logo: {
        marginVertical: 45,
      },
      heading: {
        textAlign: 'center',
        color: '#00a4de',
        fontSize: 21,
      },
      description: (error) => ({
        textAlign: 'center',
        color: error ? '#ea3d13' : '#a5a5a5',
        height: 65,
        fontSize: 18,
        marginVertical: 10,
        marginHorizontal: 20,
      }),
      buttonContainer: {
        padding: 20,
      },
      buttonText: {
        color: '#8fbc5a',
        fontSize: 15,
        fontWeight: 'bold',
      },
  
});
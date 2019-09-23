import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator  } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Flex from '../components/flex';
import Biometria from '../components/biometria';
import SideMenu from '../components/sideMenu';
import Configuration from '../components/configuration';
import BarCodeReader from '../components/barCodeReader';


const TabNavigator = createBottomTabNavigator (
  {
    SideMenu: {
      screen: SideMenu,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="md-menu" size={30} color={focused ? 'black' : '#ddd'} />
        ),
      }),
    },
    Flex: {
      screen: Flex,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="logo-foursquare" size={30} color={focused ? 'black' : '#ddd'} />
        ),
      }),
    },
    Biometria: {
      screen: Biometria,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="md-finger-print" size={30} color={focused ? 'black' : '#ddd'} />
        ),
      }),
    },
    BarCodeReader: {
      screen: BarCodeReader,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="md-barcode" size={30} color={focused ? 'black' : '#ddd'} />
        ),
      }),
    },
    Configuration: {
      screen: Configuration,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => (
          <Icon name="md-cog" size={30} color={focused ? 'black' : '#ddd'} />
        ),
      }),
    },
  },
  {
    defaultNavigationOptions: {
      tabBarOptions: {
        showLabel: false,
        //style: {backgroundColor: 'lightgray', height: 60, padding:0, margin:0},
      },
    },
    
  }
  );
  
  export default createAppContainer(TabNavigator);
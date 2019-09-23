import React, {Component} from 'react';
import { StyleSheet, View, Text, StatusBar, TouchableOpacity} from 'react-native';

export default class Flex extends Component{

  constructor(){
    super();
    this.state = {
      layout: 'flex',
      selected: 'FLEX'
    }
  }

  updateLayoutFlex = (layoutFlex, selected) => {
    this.setState({layout: layoutFlex, selected: selected});
  }

  render(){
    let layoutFlex = null;
    
    if(this.state.layout == 'columnCenter'){
      layoutFlex = this.columnCenter();
      }else if(this.state.layout == 'rowCenter'){
        layoutFlex = this.rowCenter();
      }else if(this.state.layout == 'justifyContentCenter'){
        layoutFlex = this.justifyContentCenter();
      }else if(this.state.layout == 'flexStart'){
       layoutFlex = this.flexStart();
      }else if(this.state.layout == 'flexEnd'){
        layoutFlex = this.flexEnd();
      }else if(this.state.layout == 'rowFlexStart'){
        layoutFlex = this.rowFlexStart();
       }else if(this.state.layout == 'rowFlexEnd'){
         layoutFlex = this.rowFlexEnd();
       }else if(this.state.layout == 'columnWrap'){
        layoutFlex = this.columnWrap();
      }else if(this.state.layout == 'rowWrap'){
        layoutFlex = this.rowWrap();
      }else if(this.state.layout == 'flex'){
        layoutFlex = this.flex();
      }
    return(
      <View style={styles.container}>
        <StatusBar barStyle="dark-content"/>
        <View style={{backgroundColor: 'grey'}}>
        <Text>{this.state.selected}</Text>
        </View>
        {layoutFlex}
        <View style={styles.containerButton}>   
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('flexStart', 'COLUMN FLEX START')}>
          <Text style={styles.button}>COLUMN FLEX START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('flexEnd', 'COLUMN FLEX END')}>
          <Text style={styles.button}>COLUMN FLEX END</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('columnCenter', 'COLUMN CENTER')}>
          <Text style={styles.button}>COLUMN CENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('columnWrap', 'COLUMN WRAP')}>
          <Text style={styles.button}>COLUMN WRAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('rowFlexStart', 'ROW FLEX START')}>
          <Text style={styles.button}>ROW FLEX START</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('rowFlexEnd', 'ROW FLEX END')}>
          <Text style={styles.button}>ROW FLEX END</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('rowCenter', 'ROW CENTER')}>
          <Text style={styles.button}>ROW CENTER</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('rowWrap', 'ROW WRAP')}>
          <Text style={styles.button}>ROW WRAP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('flex', 'FLEX')}>
          <Text style={styles.button}>FLEX</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.updateLayoutFlex('justifyContentCenter', 'JUSTIFY CENTER')}>
          <Text style={styles.button}>JUSTIFY CENTER</Text>
        </TouchableOpacity>
        </View>
      </View>
      );
    }



    columnCenter = () => {
      return <View style={styles.containerBoxColumnCenter}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
        <View style={styles.box}/>
      </View>;
    }

    rowCenter = () => {
      return <View style={styles.containerBoxRowCenter}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
      </View>;
    }

    justifyContentCenter = () => {
      return <View style={styles.containerBoxJustifyContentCenter}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
      </View>;
    }

    flexStart = () => {
      return <View style={styles.containerBoxFlexStart}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
      </View>;
    }

    flexEnd = () => {
      return <View style={styles.containerBoxFlexEnd}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
      </View>;
    }

    rowFlexStart = () => {
      return <View style={styles.containerBoxRowFlexStart}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
      </View>;
    }

    rowFlexEnd = () => {
      return <View style={styles.containerBoxRowFlexEnd}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
      </View>;
    }

    columnWrap = () => {
      return <View style={styles.containerBoxColumnWrap}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
        <View style={styles.box}/> 
        <View style={styles.box}/> 
      </View>;
    }

    rowWrap = () => {
      return <View style={styles.containerBoxRowWrap}>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/>
        <View style={styles.box}/> 
        <View style={styles.box}/> 
        <View style={styles.box}/>
        <View style={styles.box}/> 
        <View style={styles.box}/> 
      </View>;
    }

    flex = () => {
      return <View style={styles.containerFlex}>
        <View style={styles.boxContainerFlex1}/>
        <View style={styles.boxContainerFlex2}/>
        <View style={styles.boxContainerFlex3}/> 
      </View>;
    }



}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  containerFlex:{
    flex: 1,
    flexDirection: 'column'
  },
  boxContainerFlex1:{
    flex: 1,
    backgroundColor: 'red',
  },
  boxContainerFlex2:{
    flex: 2,
    backgroundColor: 'green',
  },
  boxContainerFlex3:{
    flex: 4,
    backgroundColor: 'blue',
  },
  containerBoxRowWrap:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  containerBoxColumnWrap:{
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  containerBoxRowFlexStart:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  containerBoxRowFlexEnd:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  containerBoxColumnCenter: {
    flex: 1,
    alignItems: 'center',
  },
  containerBoxFlexStart: {
    flex: 1,
    alignItems: 'flex-start',
  },
  containerBoxFlexEnd: {
    flex: 1,
    alignItems: 'flex-end',
  },
  containerBoxRowCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerBoxJustifyContentCenter: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: 'blue',
    margin: 8, 
  },
  containerButton:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 6,
  },
  button:{
    width: 100, 
    fontSize: 10,
    marginTop: 5, 
    marginRight: 5,
    marginBottom: 5,
    backgroundColor: '#D3D3D3',
    textAlign: 'center',
    borderRadius: 4,
    padding: 1
  },
});


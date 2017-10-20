import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Head extends Component{
  render(){
    return(
      <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.fLetter}>F</Text>
            <Text style={styles.wLetter}>W</Text>
            <Text style={styles.aLetter}>A</Text>
            <Text style={styles.pLetter}>P</Text>
          </View>
          <Text style={styles.subtitle}>Manipulate the Local FWAP Energies</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
      marginTop : 30,
      backgroundColor: '#fff',
      alignItems : 'center'
  },
  titleContainer: {
    display : 'flex',
    backgroundColor: '#fff',
    flexDirection : 'row',
    //borderWidth : 2
  },
  subtitle: {
    marginTop : 20,
    fontSize : 18,
    fontWeight : 'bold',
},
  fLetter:{
    color : 'purple',
    fontSize : 75,
    fontWeight : 'bold'
  },
  wLetter:{
    color : 'green',
    fontSize : 75,
    fontWeight : 'bold'
  },
  aLetter:{
    color : 'red',
    fontSize : 75,
    fontWeight : 'bold'
  },
  pLetter:{
    color : 'blue',
    fontSize : 75,
    fontWeight : 'bold'
  },
});

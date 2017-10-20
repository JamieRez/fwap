import React, {Component} from 'react';
import { StyleSheet, Text, View, Slider } from 'react-native';

export class FwapController extends Component{

  constructor(props){
    super(props);
    this.state = {
      flectrons : 1,
      wripples : 1,
      aridence : 1,
      plax : 1
    };
  }

  fUpdate = (val) => {
    val = Math.floor(val);
    this.setState({flectrons : val})
  }

  wUpdate = (val) => {
    val = Math.floor(val);
    this.setState({wripples : val})
  }

  aUpdate = (val) => {
    val = Math.floor(val);
    this.setState({aridence : val})
  }

  pUpdate = (val) => {
    val = Math.floor(val);
    this.setState({plax : val})
  }



  render(){
    return(
      <View style={styles.container}>

        <View style={styles.controller}>
          <View style={styles.sliderCont}>
              <Text style={styles.fLabel} >Flectrons</Text>
              <Slider style={styles.slider} onSlidingComplete={this.fUpdate.bind(this)} minimumTrackTintColor="purple" minimumValue={1} maximumValue={10000}/>
          </View>
          <Text style={styles.fCount}>{this.state.flectrons}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.sliderCont}>
              <Text style={styles.wLabel} >Wripples</Text>
              <Slider style={styles.slider} onSlidingComplete={this.wUpdate.bind(this)} minimumTrackTintColor="green" minimumValue={1} maximumValue={10000}/>
          </View>
          <Text style={styles.wCount}>{this.state.wripples}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.sliderCont}>
              <Text style={styles.aLabel} >Aridence</Text>
              <Slider style={styles.slider} onSlidingComplete={this.aUpdate.bind(this)} minimumTrackTintColor="red" minimumValue={1} maximumValue={10000}/>
          </View>
          <Text style={styles.aCount}>{this.state.aridence}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.sliderCont}>
              <Text style={styles.pLabel} >Plax</Text>
              <Slider style={styles.slider} onSlidingComplete={this.pUpdate.bind(this)} minimumTrackTintColor="blue" minimumValue={1} maximumValue={10000}/>
          </View>
          <Text style={styles.pCount}>{this.state.plax}</Text>
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
      container: {
        flex : 3,
        display : 'flex',
        backgroundColor: '#fff',
        width : '90%',
        justifyContent : 'space-around',
        //borderWidth : 2
      },
      fLabel: {
          flex : 1.5,
          marginRight : 10,
          alignSelf : 'center',
          fontSize : 20,
          fontWeight : 'bold',
          color : 'purple'
      },
      wLabel: {
          flex : 1.5,
          marginRight : 10,
          alignSelf : 'center',
          fontSize : 20,
          fontWeight : 'bold',
          color : 'green'
      },
      aLabel: {
          flex : 1.5,
          marginRight : 10,
          alignSelf : 'center',
          fontSize : 20,
          fontWeight : 'bold',
          color : 'red'
      },
      pLabel: {
          flex : 1.5,
          marginRight : 10,
          alignSelf : 'center',
          fontSize : 20,
          fontWeight : 'bold',
          color : 'blue',
      },
      slider:{
          flex : 4,
      },
      sliderCont: {
          display : 'flex',
          alignItems : 'center',
          flexDirection : 'row',
          justifyContent : 'space-between',
          width : '100%',
      },
      controller: {
        alignItems : 'center'
      },
      fCount:{
        marginTop : 10,
        color : "purple",
        fontSize : 20
      },
      wCount:{
        marginTop : 10,
        color : "green",
        fontSize : 20
      },
      aCount:{
        marginTop : 10,
        color : "red",
        fontSize : 20
      },
      pCount:{
        marginTop : 10,
        color : "blue",
        fontSize : 20
      },

});

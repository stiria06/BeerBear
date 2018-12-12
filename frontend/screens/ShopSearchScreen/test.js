import {TextInput, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import Review from '..assets/Review'

export default class test extends React.Component{
  constructor(){
    super()
    this.state={
     review1:{
        userName: 'Mickey',
        content: 'niceShop',
        date: '12/07',
        rate : 4,
      
      },
      review2:{
        userName: 'Minnie',
        content: 'BS',
        date: '12/08',
        rate : 1,
      },
      review3:{
        userName: 'Nietzsche',
        content: "Beer's dead",
        date: '12/09',
        rate : 1,
      }
    }
  }
  render(){
    return({
      <MapView style={styles.map} showsUserLocation followsUserLocation initialRegion:{}/>
      <TextInput style={{}} placeholder='' onSubmitEditting={(text) => this.setState({text}) } />
    })
  }
}

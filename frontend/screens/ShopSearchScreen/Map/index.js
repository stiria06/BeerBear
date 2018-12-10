import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import ShopInfo from '../assets/ShopInfo';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      lat:100,
      long:100,
    }
  }
  render() {
    
    navigator.geolocation.getCurrentPosition(
      position => {
        var lati=position.coords.latitude
        var longi=position.coords.longitude
        this.setState( {
          lat: lati,
          long: longi,
        })     
      }
    );

    return (
      <View style={styles.container}>
        <Text>{this.state.lat} {this.state.long} </Text>
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude:this.state.lat,
            longitude:this.state.long,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05,
          }}
          showsUserLocation
          followsUserLocation
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.lat,
              longitude: this.state.long,
            }}/> 
        </MapView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    position: 'absolute',
    top:40,
    left:0,
    bottom:0,
    right:0,
  }
});


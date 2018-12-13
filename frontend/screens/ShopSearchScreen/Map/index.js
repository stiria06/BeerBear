import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import ShopInfo from '../assets/ShopInfo';

export default class Map extends React.Component {
  state={
    lat:0,
    long:0,
    shopLat:37.533489,
    shopLong:126.994048,
    shopName:'blue55',
  }
  
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState( {
          lat: position.coords.latitude,
          long: position.coords.longitude
        })     
      }
    );
  }

  render() {

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
          <MapView.Marker
            coordinate={{
              latitude: this.state.shopLat,
              longitude: this.state.shopLong,
              
            }}
            title={this.state.shopName}
            /> 
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


import React from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';




export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      lat:0,
      long:0
    }
  }
 
  render() {
    navigator.geolocation.getCurrentPosition(
      position => {
        var lati=position.coords.latitude
        var longi=position.coords.longitude

        this.setState({
          lat: lati,
          long: longi
        })     
      }
    );

    return (
      <View style={styles.container}>
        <MapView 
          style={styles.map}
          Region={{
            latitude:this.state.lat,
            longitude:this.state.long,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}>

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    position: 'absolute',
    top:0,
    left:0,
    bottom:0,
    right:0,
  }
});


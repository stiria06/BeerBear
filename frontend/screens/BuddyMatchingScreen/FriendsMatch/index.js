import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  
} from 'react-native';
import {Container} from 'native-base';
import friends from '../assets/ShopInfo'

const styles = StyleSheet.create({
  friend: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    flex:1,
    margin: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    flex:1,
    fontSize: 18,
    color: '#000',
  }
});

export default class Friend extends Component {
  constructor(){
    super()
    this.state={
      bb:0
    }
  }
  onPressButton(){
    Alert.alert('You tapped the button!')
  }
  render() {
    let photo = friends[0].photo;
    let fname = friends[0].name;
    let lname = friends[0].address;
    return (
      <Container>
        <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
          <View style={styles.friend}>
            <Image style={styles.avatar} source={{uri:photo}} />
            <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
          <View style={styles.friend}>
            <Image style={styles.avatar} source={{uri:photo}} />
            <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
          <View style={styles.friend}>
            <Image style={styles.avatar} source={{uri:photo}} />
            <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
          <View style={styles.friend}>
            <Image style={styles.avatar} source={{uri:photo}} />
            <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight style={{flex:1, }} onPress={this.onPressButton}>
          <View style={styles.friend}>
            <Image style={styles.avatar} source={{uri:photo}} />
            <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
          </View>
        </TouchableHighlight>
      </Container>
    );
  }
}

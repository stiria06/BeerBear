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
  ScrollView,
} from 'react-native';
import {Container} from 'native-base';
import friends from './assets/friends'

const styles = StyleSheet.create({
  friend: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  avatar: {
    
    margin: 10,
    width: 100,
    height: 100,
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
      <Container style={{flex:1}}>
        <ScrollView>
          <TouchableHighlight style={{}} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:.2, }} onPress={this.onPressButton}>
            <View style={styles.friend}>
              <Image style={styles.avatar} source={{uri:photo}} />
              <Text style={styles.name}>{fname} {lname} {this.state.bb}</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={{flex:.2, }} onPress={this.onPressButton}>
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
        </ScrollView>
      </Container>
    );
  }
}

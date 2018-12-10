//실행되면 바로 찾게하기?
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  View,
  Button,
} from 'react-native'
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Thumbnail,
  Left,
  Icon
} from "native-base";

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  onPress = () => {
    this.setState({
      count: this.state.count+1
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          
         style={styles.button}
         onPress={this.onPress}
        >
         <Container>
        <Header transparent />
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={require("../../../assets/images/user.jpg")}
                />
                <Body>
                  <Text>문대성</Text>
                  <Text note>Beer Geek</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  The greatest danger for most of us is not that our aim is too
                  high and we miss it, but that it is too low and we reach it.
                </Text>
              </Body>
            </CardItem>
          </Card>
          
        </Content>
      </Container>
         
        </TouchableHighlight>
        <View style={[styles.countContainer]}>
          <TouchableHighlight>
           <Text> o</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10
  },
  countContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  countText: {
    color: '#FF00FF'
  }
})

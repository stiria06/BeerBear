import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
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
//import UserInfo from "..assets/UserInfo";


class Profile extends React.Component {
  state = {
    
  };
  onPressButton(){
    //누르면 대화요청.
  }
  render() {
   // let name = UserInfo[0].name;
   // let age = UserInfo[0].age;
   // let sex = UserInfo[0].sex;
   // let photo = UserInfo[0].photo;
    //let introduce = UserInfo[0].introduce;

    return (
      <Container>
        <View style={{ }}>
          <Image source={{uri:photo}} />
          <Text> {name} </Text>
          <Text> {sex}, {age} </Text>
        </View>
        <View style={{ }}>
          <Text>{introduce}</Text>
        </View>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});

export default Profile;

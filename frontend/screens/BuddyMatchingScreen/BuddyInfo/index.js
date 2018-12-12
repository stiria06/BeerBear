import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TouchableOpacity
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


const BeerStamp = ({ stamp }) => {
  return (
    <CardItem>
      {[...Array(stamp)].map((e, i) => {
        return (
          <View style={{marginRight:10}} key={i}>
            <Icon style={{ fontSize: 30 }} color="#eee" name="beer" />
          </View>
        );
      })}
    </CardItem>
  );
};

class Profile extends React.Component {
  state = {
    stamp: 5
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
        <Header transparent />
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
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
          <Card>
            <CardItem>
              <Text> 스탬프 현황 </Text>
            </CardItem>
            <CardItem>
              <BeerStamp stamp={this.state.stamp} />
            </CardItem>
          </Card>
          <Button title='asdf' onPressButton={this.onPressButton}>
          
          </Button>
        </Content>
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

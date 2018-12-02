import React, { Component } from "react";
import {
  AsyncStorage,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Image
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
  Title
} from "native-base";
import Colors from "../../../constants/Colors";
import ShopInfo from '../../../assets/BsInfo';
import { Ionicons, FontAwesome } from "@expo/vector-icons";

//          <CardItem cardBody>
//<Thumbnail source={require("../../../assets/images/bsImg.png")} />
//</CardItem>

class Main extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        // headerLeft: (
        //   <TouchableOpacity
        //     style={styles.header}
        //     onPress={() => navigation.openDrawer()}
        //   >
        //     <FontAwesome name="bars" size={20} />
        //   </TouchableOpacity>
        // )
        title:'비어샵 인포'
      });
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail
                  source={{uri: ShopInfo[0].photo}}/>
                <Body>
                  <Text>{ShopInfo[0].name}</Text>
                  <Text note></Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  주소: {ShopInfo[0].address}
                </Text>
                <Text>
                  홈페이지: {ShopInfo[0].homepage}
                </Text>
              </Body>
            </CardItem>

          </Card>
          <Card>
            <CardItem>
              <Text> 단골고객 </Text>
            </CardItem>
            <CardItem>
            <Text> {ShopInfo[0].customers_counting} </Text>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Text> 고객방문 </Text>
            </CardItem>
            <CardItem>
            <Text> 230회 </Text>
            </CardItem>
          </Card>
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

export default Main;

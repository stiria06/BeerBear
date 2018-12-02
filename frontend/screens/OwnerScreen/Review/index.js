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
import Colors from "../../../constants/Colors";

// const BeerStamp = ({ stamp }) => {
//   return (
//     <CardItem>
//       {[...Array(stamp)].map((e, i) => {
//         return (
//           <View style={{marginRight:10}} key={i}>
//             <Icon style={{ fontSize: 30 }} color={Colors.tintColor} name="beer" />
//           </View>
//         );
//       })}
//     </CardItem>
//   );
// };

class Review extends React.Component {
  render() {
    return (
      <Container>
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

export default Review;

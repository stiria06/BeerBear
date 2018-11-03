import React, { Component } from "react";
import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class Event extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerLeft: (
      <TouchableOpacity
        style={styles.header}
        onPress={() => navigation.openDrawer()}
      >
        <FontAwesome name="bars" size={20} />
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <View style={styles.container}>
        <Text>이벤트 디테일</Text>
        <FontAwesome name="check-circle-o" size={48} />
        <Button
          onPress={() => this.props.navigation.navigate("EventDetails")}
          title="Go To Details"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  header: {
      marginLeft: 10
  }
});

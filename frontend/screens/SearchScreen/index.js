import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default class SearchScreen extends React.Component {
  static navigationOptions = { header: null };

  render() {
    return (
      <View style={styles.container}>
        <Text>SEARCH PAGE</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent : 'center',
    alignItems : 'center'
  }
});

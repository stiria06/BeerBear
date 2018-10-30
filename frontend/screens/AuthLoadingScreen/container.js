import React, { Component } from "react";
import PropTypes from "prop-types";
import AuthLoadingScreen from "./presenter";
import {
  AsyncStorage,
} from "react-native";
class Container extends Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("token");
    console.log(userToken);
    this.props.navigation.navigate(userToken ? "Main" : "Auth");
  };

  render() {
    return <AuthLoadingScreen {...this.props} />;
  }
}

export default Container;

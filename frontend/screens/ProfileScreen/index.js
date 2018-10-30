import React from "react";
import { AsyncStorage, StyleSheet, View, Button } from "react-native";
import { connect } from "react-redux";
import { actionCreators as AuthActions } from "../../redux/modules/auth";

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <Button title="로그아웃" onPress={this.handleLogout} />
      </View>
    );
  }

  handleLogout = async () => {
    await this.props.logout();
    await this.props.navigation.navigate("Auth");
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  }
});
const mapStateToProps = (state, ownProps) => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(AuthActions.logout());
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

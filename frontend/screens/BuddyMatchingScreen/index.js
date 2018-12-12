import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";
import FriendsMatch from "./Matching";
import Chat from "./Chat";
import FriendsList from "./List";

const BeerSearchTabs = createBottomTabNavigator(
  {
    FriendsMatch: {
      screen: FriendsMatch,
      navigationOptions: {
        title: "Find Friends",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    },
    Chat: {
      screen: Chat,      navigationOptions: {
        title: "Chat List",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
          />
        )
      }
    },
    FriendsList: {
      screen: FriendsList,
      navigationOptions: {
        title: "Matched Friends",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.tintColor
    }
  }
);

export default createStackNavigator(
  { BeerSearchTabs }, 
  { 
    headerMode: "none" ,
  });

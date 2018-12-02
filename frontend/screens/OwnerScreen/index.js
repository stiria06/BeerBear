import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Main from "./Main";
import Chat from "./Chat";
import Review from "./Review";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";

const OwnerTabs = createBottomTabNavigator({
    Main: {
        screen: Main,
        navigationOptions: {
          title: "비어샵 info",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon
              focused={focused}
              name={
                Platform.OS === "ios"
                  ? `ios-person${focused ? "" : "-outline"}`
                  : "md-person"
              }
            />
          )
        }
      },
    Chat: {
    screen: Chat,
    navigationOptions: {
      title: "비어샵 채팅",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? `ios-person${focused ? "" : "-outline"}`
              : "md-person"
          }
        />
      )
    }
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "비어샵 리뷰",
      tabBarIcon: ({ focused }) => (
        <TabBarIcon
          focused={focused}
          name={
            Platform.OS === "ios"
              ? "ios-beer"
              : "md-beer"
          }
        />
      )
    }
  },
},
{
  tabBarOptions: {
      activeTintColor: Colors.tintColor,
  }
}
);

export default createStackNavigator(
  { OwnerTabs }, 
  { 
    // headerMode: "none" ,
  });

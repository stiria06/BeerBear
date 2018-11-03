import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";
import Favorite from "./Favorite";
import Search from "./Search";

const BeerSearchTabs = createBottomTabNavigator(
  {
    Search: {
      screen: Search,
      navigationOptions: {
        title: "맥주 검색",
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
          />
        )
      }
    },
    Favorite: {
      screen: Favorite,
      navigationOptions: {
        title: "Favorite",
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

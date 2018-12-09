import React from "react";
import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import shopscreen from "./shopscreen";
import map from "./map";
import { FontAwesome } from "@expo/vector-icons";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";

const ShopSearchTabs = createBottomTabNavigator({

  Map: {

    screen: map,

    navigationOptions: {

      title: "지도",

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

  Shopscreen: {

    screen: shopscreen,

    navigationOptions: {

      title: "샵",

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

  { ShopScreenTabs }, 

  { 

    headerMode: "none" ,

  });

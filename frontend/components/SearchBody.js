import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Content, ListItem, List } from "native-base";

class SearchBody extends Component {
  render() {
    const beerData = this.props.beerData;
    return (
      <Content>
        <List style={{ backgroundColor: "white" }}>
          <ListItem itemDivider>
            <Text>맥주명</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.name}</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>카테고리</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.category}</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>설명</Text>
          </ListItem>
          <ListItem>
            <Text>{beerData.description}</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

export default SearchBody;

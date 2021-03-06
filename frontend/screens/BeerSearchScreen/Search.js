import React, { Component } from "react";
import { View, Text, StyleSheetm, Keyboard } from "react-native";
import { Container, Content } from "native-base";
import SearchHeader from "../../components/SearchHeader";
import SearchBody from "../../components/SearchBody";

class Search extends Component {
  state = {
    searchBeer: "",
    beerData: {}
  };

  beerSearch = () => {
    Keyboard.dismiss();
    const beerName = this.state.searchBeer.toLowerCase();
    this.setState({
      beerData: {
          name: this.state.searchBeer,
          category: "라거",
          description: "맥주내용",
          
      }
    });
  };
  renderContent = () => {
    if (this.state.beerData) {
      return (
        <View>
          <SearchBody beerData={this.state.beerData} />
        </View>
      );
    } else {
      alert("맥주를 찾을 수 없습니다.");
    }
  };
  render() {
    return (
      <Container>
        <SearchHeader
          value={this.state.searchBeer}
          onChangeText={searchBeer => this.setState({ searchBeer })}
          beerSearch={this.beerSearch}
        />
        <Content>{this.renderContent()}</Content>
      </Container>
    );
  }
}
export default Search;

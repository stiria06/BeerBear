import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { Content, ListItem, List } from "native-base";
import { Ionicons, FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default class index extends React.Component {
  state ={
    
  }
  onPressButton(){

  }
  

  render() {
    let ShopPic ={ uri : 'http://magazine.hankyung.com/magazinedata/images/photo/201802/0021216692d3f97f0c5c2ca6f05b05c3.jpg'};
    let ShopName = 'Shopname'
    const shopData = this.props.shopData;
    return (
      <View style={styles.container}>
        <View style = {styles.topBar}>
          <View style = {styles.title}>
              <FontAwesome style={styles.title}  size={30} name="arrow-left" />
              <Text style={styles.title}> {ShopName}</Text>
              <Ionicons style={styles.title}  size={30} name="md-heart-empty" />
          </View>
        </View>
       
         <Content>
        <List style={{ backgroundColor: "white",  }}>
          <ListItem style={{ justifyContent:'center' }}>
            <Image style={{ width:120, height:120, alignItems:'center'}} source={ShopPic}/>
          </ListItem>
          <ListItem style={{  justifyContent:'center',   }}>
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
          </ListItem>
       
          <ListItem style={{ flexDirection:'row', }}>
            <FontAwesome style={{}} color="#1FB6FF" size={30} name="map-marker" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>shopData.address</Text>
          </ListItem>
        
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="#1FB6FF" size={30} name="home" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>shopData.homepage</Text>
          </ListItem>
       
          <ListItem style={{  flexDirection:'row',   }}>
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="md-beer" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>shopData.menu</Text>
          </ListItem>
          <ListItem style={{  flexDirection:'row',   }}>
            <MaterialIcons backgroundColor="transparent" color="#1FB6FF" size={30} name="rate-review" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>shopData.review</Text>
          </ListItem>
        </List>
      </Content>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flex:0.1,
    backgroundColor: '#1FB6FF',
    marginTop:24
  },
  main: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
  },
  title: {
    flexDirection: 'row',
    fontSize: 24,
    backgroundColor:"transparent",
    alignItems:'center',
    justifyContent:'space-between',
    color: 'white',
    marginTop:4,
    marginLeft:5,
    marginRight:5,
  },
  picture: {
    width:120, height:120, alignItems:'center', justifyContent:'center', marginTop:10,
  },
  icons:{
    flex:1,
    size:50,
    color:"#77BEE3",
    alignItems:'flex-start',

  }

});

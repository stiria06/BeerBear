import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Content, ListItem, List } from "native-base";
import { Ionicons, FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import Button from 'react-native-button';
import ShopInfo from '../assets/ShopInfo';

class Review extends React.Component{
  render(){
    return(
      <View style={{alignItems: 'center'}}>
        <Text>{this.props.userName}</Text>
        <Text>{this.props.content}</Text>
      </View>
    );

  }

}

export default class ShopScreen extends React.Component {
  state ={
    
  }
  onPressButton(){

  }
  

  render() {
    let ShopPic ={ uri : ShopInfo[0].photo };
    let ShopName = ShopInfo[0].name;
    let ShopAddress = ShopInfo[0].address;
    let ShopPhoneNum = ShopInfo[0].phone_num;
    let ShopHomepage = ShopInfo[0].homepage;
    
    return (
      <View style={styles.container}>
        <View style = {styles.topBar}>
          <View style = {styles.title}>
              <FontAwesome style={styles.title}  size={30} name="arrow-left" />
              <Text style={styles.title}> {ShopName}</Text>
              <Button  style={{height:30, width:30  }} onPress={this.onPressButton} >
                <Ionicons size={30} color='white' name='md-heart-empty'/>
              </Button>
          </View>
        </View>
       
         <Content>
        <List style={{ backgroundColor: "white",  }}>
          <ListItem style={{ justifyContent:'center', flexDirection:'column' }}>
            <Image style={{ width:120, height:120, alignItems:'center'}} source={ShopPic}/>
            <Text style={{ paddingTop:10, fontSize:21.33, paddingLeft:20}}>{ShopName}</Text>
          </ListItem>

          <ListItem style={{  justifyContent:'center',   }}>
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
            <Ionicons backgroundColor="transparent" color="#1FB6FF" size={30} name="ios-star" />
          </ListItem>
          <ListItem style={{ flexDirection:'row', }}>
            <Entypo style={{}} color="#1FB6FF" size={30} name="shop" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopName}</Text>
          </ListItem>
       
          <ListItem style={{ flexDirection:'row', }}>
            <FontAwesome style={{}} color="#1FB6FF" size={30} name="map-marker" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopAddress}</Text>
          </ListItem>
        
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="#1FB6FF" size={30} name="home" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopHomepage}</Text>
          </ListItem>
      
          <ListItem style={{  flexDirection:'row',   }}>
            <FontAwesome  color="#1FB6FF" size={30} name="phone" />
            <Text style={{ fontSize:21.33, paddingLeft:20}}>{ShopPhoneNum}</Text>
          </ListItem>
       
          <ListItem style={{  flexDirection:'row',   }}>
            <MaterialIcons backgroundColor="transparent" color="#1FB6FF" size={30} name="rate-review" />
            <Review userName= '홍길동' content='good'/>
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


})

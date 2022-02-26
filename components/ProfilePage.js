import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';

const navigation = useNavigation
export default class Profile extends React.Component{
  state={
    search:'',
  };
  updateSearch = (search)=>{
    this.setState({search});
    
  };

  render(){
    const {search}= this.state;
    return(
    <View style={styles.container}>
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/ProfilePageIcons/ProfileImage.png')} style={{height:100,width:100,borderRadius:50, backgroundColor:'gray',marginTop:30,marginHorizontal:20, marginVertical:20}}>
          </Image>
          <View style={{flexDirection:'column', marginTop:50,marginVertical:30,marginHorizontal:5}}>
            <Text style={{fontSize:'30',fontWeight:'bold'}}>{"Pankaj Sharma"}</Text>
            <Text style={{fontSize:'16',color:'green'}}>View Profile</Text>
          </View>
        </View>
<Card style={{backgroundColor:'#A9A9A9',height:1}}></Card>
        <Text style={{color:'gray',fontWeight:'bold',fontSize:26, marginHorizontal:20,marginVertical:20}}>ACCOUNT SETTING</Text>

      <TouchableOpacity>
        <View style={{fontWeight:'bold',fontSize:18,marginVertical:20,flexDirection:'row'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'bold',fontSize:18, marginHorizontal:20,marginVertical:5}} >Personal Information</Text>
          <Image source={require('../assets/ProfilePageIcons/profile-male.png')} style={{alignSelf:'flex-end',marginHorizontal:20,marginVertical:5}}/>
        </View>
      </TouchableOpacity>

<Card style={{backgroundColor:'#A9A9A9',height:1,marginHorizontal:20}}></Card>

      <TouchableOpacity onPress ={()=>{this.props.navigation.navigate('Payments')}}>
        <View style={{fontWeight:'bold',fontSize:18,marginVertical:20,flexDirection:'row'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'bold',fontSize:18, marginHorizontal:20,marginVertical:5}} >Payment and payouts</Text>
          <Image source={require('../assets/ProfilePageIcons/wallet.png')} style={{alignSelf:'flex-end',marginHorizontal:20,marginVertical:5}}/>
        </View>
      </TouchableOpacity>

<Card style={{backgroundColor:'#A9A9A9',height:1,marginHorizontal:20}}></Card>

      <TouchableOpacity>
        <View style={{fontWeight:'bold',fontSize:18,marginVertical:20,flexDirection:'row'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'bold',fontSize:18, marginHorizontal:20,marginVertical:5}} >Notifications</Text>
          <Image source={require('../assets/ProfilePageIcons/bell.png')} style={{alignSelf:'flex-end',marginHorizontal:20,marginVertical:5}}/>
        </View>
      </TouchableOpacity>

<Card style={{backgroundColor:'#A9A9A9',height:1,marginHorizontal:20}}></Card>

      <TouchableOpacity>
        <View style={{fontWeight:'bold',fontSize:18,marginVertical:20,flexDirection:'row'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'bold',fontSize:18, marginHorizontal:20,marginVertical:5}} >{"Travel for work"}</Text>
          <Image source={require('../assets/ProfilePageIcons/credit-card.png')} style={{alignSelf:'flex-end',marginHorizontal:20,marginVertical:5}}/>
        </View>
      </TouchableOpacity>
        
<Card style={{backgroundColor:'#A9A9A9',height:1,marginHorizontal:20}}></Card>

        <Text style={{color:'gray',fontWeight:'bold',fontSize:26, marginHorizontal:20,marginVertical:20}}>HOSTING</Text>

      </ScrollView>




      <View style={styles.footerStyle} >  
      <TouchableOpacity style={{height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
            <Image source={require('../assets/footerIcon/blackSearch.png')}style={{flex:1,alignSelf:'center',marginTop:3}}/>
            <Text style={{fontSize:10,textAlign:'center',}}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{this.props.navigation.navigate('Saved')}}>
            <Image source={require('../assets/footerIcon/blackHeart.png')}style={{flex:1,alignSelf:'center',marginTop:3}}/>
            <Text style={{fontSize:10,textAlign:'center'}}>Saved</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{this.props.navigation.navigate('Trips')}}>
            <Image source={require('../assets/footerIcon/blacktrip.png')}style={{flex:1,alignSelf:'center',marginTop:5}}/>
            <Text style={{fontSize:10,textAlign:'center'}}>Trips</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{this.props.navigation.navigate('Inbox')}}>
            <Image source={require('../assets/footerIcon/blackInbox.png')}style={{flex:1,alignSelf:'center',marginTop:5}}/>
            <Text style={{fontSize:10,textAlign:'center'}}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{ this.props.navigation.navigate('Profile')}}>
            <Image source={require('../assets/footerIcon/redProfile.png')} style={{flex:1,alignSelf:'center',marginTop:3,borderRadius:5}}/>
            <Text style={{fontSize:10,textAlign:'center',color:'#e75480'}}>Profile</Text>
      </TouchableOpacity>
            
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
  footerStyle:{
    backgroundColor:'#f8f8f8',
    flexDirection:'row',
    height:60,
    paddingBottom:30,
    shadowColor:'black',
    shadowOffset:{width:0, height:2},
    shadowOpacity:0.5,
    elevation:2,
    marginHorizontal:10,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    position:'relative',
  }
})



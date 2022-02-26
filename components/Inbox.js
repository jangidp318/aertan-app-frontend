import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';

const navigation = useNavigation
export default class Inbox extends React.Component{
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
      
        <Text style={{fontSize:34, fontWeight:'bold',marginTop:50,marginVertical:10,marginHorizontal:20,}}>Inbox</Text>
        <Text style={{fontSize:14, fontWeight:'bold',marginHorizontal:20,color:'gray'}}>{"Messages from your host will appear here."}</Text>
        <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
          <View style={{justifyContent:'center',marginVertical:170,alignItems:'center'}}>
          <Image source={require('../assets/gmail_logo_100px.png')} style={{}}/>
          </View>
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
      <TouchableOpacity style={{height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}}>
            <Image source={require('../assets/footerIcon/redInbox.png')}style={{flex:1,alignSelf:'center',marginTop:5}}/>
            <Text style={{fontSize:10,textAlign:'center',color:'#e75480'}}>Inbox</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{ this.props.navigation.navigate('Profile')}}>
            <Image source={require('../assets/footerIcon/blackProfile.png')} style={{flex:1,alignSelf:'center',marginTop:3,borderRadius:5}}/>
            <Text style={{fontSize:10,textAlign:'center'}}>Profile</Text>
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



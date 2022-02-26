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
      
        
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
          <View style={{height:50,width:200,marginHorizontal:20,marginTop:70, marginVertical:20}}>
        <Image source={require('../assets/AertanPlusImages/AertanPlus.png')} style={{flex:1}}/>
        </View>
        <Text style={{fontSize:30, fontWeight:'bold',color:'white',marginHorizontal:20,marginVertical:10}}>{"You're ready to publish!"}</Text>
        <Text style={{fontSize:13, fontWeight:'bold',color:'#07d9af',marginHorizontal:20,marginVertical:10}}>{"Aenean et molesite risus. Vivamus quis metus nec magna mollis consectetur. Nam nulla lorem, vestibulum faucibus cursus placerat, dapibus id turpis."}</Text>

        <TouchableOpacity style={{backgroundColor:'white', height:50, flex:1,alignSelf:'left',marginHorizontal:20,borderRadius:5, marginVertical:10}}>
                <Text style={{fontSize:16,textAlign:'center',justifyContent:'center',marginHorizontal:20,marginVertical:15, fontWeight :'bold', color:'#03866c'}}>{"Publish Listing"}</Text>
        </TouchableOpacity> 


        <TouchableOpacity style={{backgroundColor:'#03866c', height:50, flex:1,alignSelf:'left',marginHorizontal:20,borderRadius:5, marginVertical:10,borderWidth:1,borderColor:'white'}}>
                <Text style={{fontSize:16,textAlign:'center',justifyContent:'center',marginHorizontal:20,marginVertical:15, fontWeight :'bold', color:'white'}}>{"Make Changes"}</Text>
        </TouchableOpacity>  
        </ScrollView>




      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#03866c',

  },
 
})



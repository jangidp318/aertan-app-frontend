import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header,BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default class AertanPlus2 extends React.Component{
  state={
    search:'',
    Images:[
      {img:require('../assets/AertanPlusImages/Image1.jpg')},
      {img:require('../assets/AertanPlusImages/Image2.jpg')},
      {img:require('../assets/AertanPlusImages/Image3.jpg')},
      {img:require('../assets/AertanPlusImages/Image4.jpg')}

    ]
  };
  updateSearch = (search)=>{
    this.setState({search});
  };
  constructor() {
        super();           
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
      }

      componentWillMount() {
          BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
      }

      componentWillUnmount() {
          BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick);
      }

      handleBackButtonClick() {
          this.props.navigation.goBack(null);
          //BackHandler.exitApp();
          return true;
      }

  render(){
    const {search}= this.state;

    return(
    <View style={styles.container}>

      <ScrollView 
        showsHorizontalScrollIndicator={false}
        scrollToOverflowEnabled
        style={styles.scrollView}>
    <Card style={{height:550,width:380}}>
      <ImageBackground source={require('../assets/AertanPlusImages/AertanPlus2background.jpg')} style={{flex:1}}>
      
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=> this.handleBackButtonClick()} style={{marginHorizontal:15,marginTop:30}}>
        <Icon 
        name = 'chevron-left'
        size = '40' 
        /> 
         </TouchableOpacity>
      
        </View>
            <View>
               <Image source={require('../assets/AertanPlusImages/AertanPlus2.png')} style={{alignSelf:'center',marginTop:140, marginBottom:10}}/>
               <Text style={{textAlign:'center',color:'black' ,fontSize:20, fontWeight:'bold', fontFamily:'Harlow-Solid',marginVertical:10}}>{"All the comforts of \nhome, plus more"}</Text>
               <TouchableOpacity onPress={()=>{this.props.navigation.navigate('Publishing')}} style={{borderRadius:10,backgroundColor:'#f8f8f8',borderColor:'gray',borderWidth:1,marginHorizontal:80, justifyContent:'center', marginTop:10,height:50}}>
              <View style={{flexDirection:'row'}}>
                  <Text style={{textAlign:'center',color:'gray',fontWeight:'bold',fontSize:20,flex:1,marginHorizontal:5}}>{'Watch the Film'}</Text>
                  <Image source={require('../assets/AertanPlusImages/play_24px.png')} style={{marginHorizontal:10}}/>
              </View>
            </TouchableOpacity>
            </View>
          </ImageBackground> 
        </Card>
         
         <Text style={{fontSize:24,color:'#565656',fontWeight:'bold',marginHorizontal:20,marginTop:20}}>{'Thoughtfully designed homes. Exceptional hosts. Verified for quality'}</Text>
         <Text style={{fontSize:14,color:'#565656',marginHorizontal:20,marginVertical:10}}>{'Aenean et molesite risus. Vivamus quis metus nec magna mollis consectetur. Nam nulla lorem, vestibulum faucibus placerat, dapibus id turpis'}</Text>

         
        </ScrollView>
            
          
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarStyle: { 
    marginTop:10,
    marginVertical:10,
    marginHorizontal:30,
    borderRadius:40,
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



import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header, BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';

const navigation = useNavigation
export default class Profile extends React.Component{
  state={
    search:'',
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
      <TouchableOpacity onPress={()=> this.handleBackButtonClick()}>
        <Icon 
          name = 'chevron-left'  
          size = '40'
          style={{marginTop:30, alignSelf:'left',marginHorizontal:10}}/>
         </TouchableOpacity>
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>

        <View style={{flexDirection:'row'}}>
          <View style={{flexDirection:'column',marginVertical:10,marginHorizontal:20}}>
            <Text style={{fontSize:'26',fontWeight:'bold'}}>{"Payments and payouts"}</Text>
          </View>
        </View>

      

      <TouchableOpacity>
        <View style={{fontWeight:'bold',fontSize:14,marginVertical:20,flexDirection:'row'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'',fontSize:18, marginHorizontal:20,marginVertical:2.5}} >Payouts preferences</Text>
          <Image source={require('../assets/ProfilePageIcons/wallet-32.png')} style={{alignSelf:'flex-end',marginHorizontal:20,marginVertical:2.5}}/>
        </View>
      </TouchableOpacity>

<Card style={{backgroundColor:'#A9A9A9',height:0.5,marginHorizontal:20}}></Card>

      <TouchableOpacity>
        <View style={{fontWeight:'bold',fontSize:14,marginVertical:20,flexDirection:'row'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'',fontSize:18, marginHorizontal:20,marginVertical:2.5}} >Credits & coupons</Text>
          <Image source={require('../assets/ProfilePageIcons/ticket-32.png')} style={{alignSelf:'flex-end',marginHorizontal:20,marginVertical:2.5}}/>
        </View>
      </TouchableOpacity>

<Card style={{backgroundColor:'#A9A9A9',height:0.5,marginHorizontal:20}}></Card>

      <TouchableOpacity>
        <View style={{fontWeight:'bold',fontSize:14,marginVertical:20,flexDirection:'row',justifyContent:'space-between'}} >
          <Text style={{flex:1,color:'gray',fontWeight:'',fontSize:18, marginHorizontal:20,marginVertical:2.5}} >{"Currency"}</Text>
           <Text style={{color:'#03866c',fontWeight:'bold',fontSize:20,marginVertical:2.5,marginHorizontal:20}} >{"INR-$"}</Text>
          
        </View>
      </TouchableOpacity>
        
<Card style={{backgroundColor:'#A9A9A9',height:0.5,marginHorizontal:20}}></Card>

      </ScrollView>
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



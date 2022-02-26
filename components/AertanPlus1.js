import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header,BackHandler} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';

export default class AertanPlus extends React.Component{
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
    <Card style={{height:500,width:380}}>
      <ImageBackground source={require('../assets/AertanPlusImages/AertanPlus1.png')} style={{flex:1}}>
      
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity onPress={()=> this.handleBackButtonClick()}>
        <Icon 
          name = 'chevron-left'  
          size = '50'
          style={{marginTop:30}}/>
         </TouchableOpacity>
      <SearchBar
        lightTheme
        containerStyle={{
              flex:1,
              borderRadius:5,
              height:50,
              marginHorizontal:10,
              marginVertical:4,
              backgroundColor:'#f8f8f8',
              shadowColor:'black',
              shadowOffset:{width:0,height:2},
              shadowOpacity:0.5,
              levation:2, 
              marginTop:30,
              position:'relative',}}
        inputContainerStyle={{borderRadius:30,height:30, backgroundColor:'#f8f8f8'}}
        inputStyle={{fontSize:20,color:'black'}}
        style={styles.searchBarStyle}
        placeholder="Search "
        onChangeText={this.updateSearch}
        loadingProps={true}
        value={search}/>
        </View>
        
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{borderRadius:20,flex:1,borderColor:'white',borderWidth:1,marginVertical:10,marginHorizontal:10,width:100,height:40, justifyContent:'center'}}>
              <Text style={{textAlign:'center',color:'white',fontSize:20,}}>Dates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:20,borderWidth:1,flex:1,borderColor:'white',width:100,height:40,marginVertical:10,marginHorizontal:10,justifyContent:'center'}}>
              <Text style={{textAlign:'center',color:'white',fontSize:20,}}>Gustes</Text>
            </TouchableOpacity>
            </View>
            <View>
               <Image source={require('../assets/AertanPlusImages/AertanPlus.png')} style={{alignSelf:'center',marginTop:30, marginBottom:20}}/>
               <Text style={{textAlign:'center',color:'white', fontSize:20, fontWeight:'bold', fontFamily:'Harlow-Solid'}}>{"  A selection of places to \nstay verified for quality and \ndesign"}</Text>
               <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AertanPlus2')}} style={{borderRadius:10,backgroundColor:'#f8f8f8',borderColor:'gray',borderWidth:1,marginHorizontal:100, justifyContent:'center', marginTop:20,height:50}}>
              <View style={{flexDirection:'row'}}>
                  <Text style={{textAlign:'center',color:'gray',fontWeight:'bold',fontSize:20,flex:1,marginHorizontal:5}}>{'Learn More'}</Text>
                  <Image source={require('../assets/AertanPlusImages/play_24px.png')} style={{marginHorizontal:10}}/>
              </View>
            </TouchableOpacity>
            </View>
          </ImageBackground> 
        </Card>
         
         <Text style={{fontSize:30, fontWeight:'bold',color:'#565656',marginHorizontal:20,marginTop:20}}>{'Featured Aertan Plus destinations'}</Text>
         <Text style={{fontSize:14, fontWeight:'bold',color:'#565656',marginHorizontal:20,marginVertical:10}}>{'Browse beautiful places to stay with all the comforts of home, plus more.'}</Text>

         <FlatList  
                  data={this.state.Images}
                  horizontal
                  renderItem={(item)=>
                  <View style={{flex:1,marginLeft:15}}> 
                  <TouchableOpacity>
                  
                  <Image source={item.item.img} style={{flex:1,borderRadius:2, marginHorizontal:5,marginVertical:10}}/>
                
              </TouchableOpacity>
            </View>}
          />
        </ScrollView>
            
          
            
             
      

      <View style={styles.footerStyle} >  
      <TouchableOpacity style={{height:50, width:50,marginVertical:5,marginHorizontal:10,borderRadius:10}} onPress={()=>{}}>
            <Image source={require('../assets/footerIcon/redSearch.png')}style={{flex:1,alignSelf:'center',marginTop:3}}/>
            <Text style={{fontSize:10,textAlign:'center',color:'#e75480'}}>Explore</Text>
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



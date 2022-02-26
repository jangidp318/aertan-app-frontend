import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';




const navigation = useNavigation
export default class Home extends React.Component{
  state={
    search:'',
     Data : [
            {title: 'Stays',img: require("../assets/Images/Image1.jpg")},
            {title: 'Experiences',img: require("../assets/Images/Image2.jpg")},
            {title: 'Adventures',img: require('../assets/Images/Image3.jpg')},
          ],
    Locations:[
            {title: 'Singapore',},
            {title: 'Anjuna, India',},
            {title: 'Vienna',},
            ],
    
    Stays:[
            {img: require("../assets/Images/Stays1.jpeg")},
            {img: require("../assets/Images/Stays2.png")},
            {img: require('../assets/Images/Stays3.jpg')},
            ]
  };
  updateSearch = (search)=>{
    this.setState({search});
  };

  render(){
    const {search}= this.state;



    return(
    <View style={styles.container}>
      <SearchBar
        lightTheme
        containerStyle={{
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

        <ScrollView 
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.scrollView}>
            <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{borderRadius:20,flex:1,backgroundColor:'#f8f8f8',borderColor:'gray',borderWidth:1,marginVertical:10,marginHorizontal:10,width:100,height:40, justifyContent:'center'}}>
              <Text style={{textAlign:'center',color:'black',fontSize:20,}}>Dates</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{borderRadius:20,borderWidth:1,flex:1,backgroundColor:'#f8f8f8',borderColor:'gray',width:100,height:40,marginVertical:10,marginHorizontal:10,justifyContent:'center'}}>
              <Text style={{textAlign:'center',color:'black',fontSize:20,}}>Gustes</Text>
            </TouchableOpacity>
            </View>
             <Text style={styles.titleTxt}>{"What can we help you find, Pankaj?"}</Text>
             
            <FlatList  
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  data={this.state.Data}
                  horizontal
                  renderItem={(item)=>
                  <View style={styles.container}> 
              <TouchableOpacity>
                <Card style={{width:200,height:200,borderRadius:20, marginHorizontal:15,marginVertical:15,shadowColor:'black',shadowOffset:{width:5,height:5},shadowOpacity:0.2,levation:2,}}>
                  <Image source={item.item.img} style={{flex:1,borderTopLeftRadius:20,borderTopRightRadius:20}}/>
                  <Text style={{justifyContent:'center',marginLeft:20,marginVertical:15,fontSize:20}}>{item.item.title}</Text>
                </Card>
              </TouchableOpacity>
            </View>
                    }
                  />
                <Text style={styles.titleTxt}>{"What can we help you find, Pankaj?"}</Text>
                <FlatList  
                  data={this.state.Locations}
                  horizontal
                  renderItem={(item)=>
                  <View style={styles.container}> 
              <TouchableOpacity>
                <Card style={{width:150,height:150,borderRadius:20, marginHorizontal:15,marginVertical:15,shadowColor:'black',shadowOffset:{width:5,height:5},shadowOpacity:0.2,levation:2,}}>
                  <Image source={require('../assets/footerIcon/blackSearch.png')} style={{marginVertical:20,marginHorizontal:20,color:'gray'}}/>
                  <Text style={{justifyContent:'center',marginLeft:20,fontSize:20,fontWeight:'bold'}}>{item.item.title}</Text>
                  <Text style={{justifyContent:'center',marginLeft:20,fontSize:16,color:'gray'}}>{"Stays and experiences"}</Text>
                </Card>
                
              </TouchableOpacity>
            </View>
                    }
                  />
                  <Text style={styles.titleTxt}>{"Top-rated experiences"}</Text>
                  <Text style={{fontSize:14, marginHorizontal:10}}>{"Book activites led by local hosts on yout next trip"}</Text>
                  
          <View style={{flex:1, flexDirection:'row'}}> 
            <View>
              <Card style={{width:160,height:160,borderRadius:20, marginHorizontal:15,marginVertical:15,}}>
                <Image source={require('../assets/Images/CookingClass.jpg')} style={{borderRadius:20}}/>
              </Card>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:20}}>{'COOKING CLASS'}</Text>
              <Text style={{fontSize:14,marginHorizontal:20,marginVertical:5}}>{'Boring Indian Food \nWorkshop'}</Text>
              <Text style={{fontSize:14,marginHorizontal:20,marginVertical:5}}>{'From $7,403/Person'}</Text>
              <Text style={{fontSize:12,marginHorizontal:20,marginVertical:5,color:'gray'}}>{'Food included'}</Text>
            </View>
            <View>
              <Card style={{width:160,height:160,borderRadius:20, marginHorizontal:15,marginVertical:15,}}>
                <Image source={require('../assets/Images/HistoryWalk.jpg')} style={{borderRadius:20}}/>
              </Card>
              <Text style={{fontSize:16,fontWeight:'bold',marginHorizontal:20}}>{'HISTORY WALK'}</Text>
              <Text style={{fontSize:14,marginHorizontal:20,marginVertical:5}}>{'Local Folklore &\nFortune-Telling Walk'}</Text>
              <Text style={{fontSize:14,marginHorizontal:20,marginVertical:5}}>{'From $4,653/Person'}</Text>
              <Text style={{fontSize:12,marginHorizontal:20,marginVertical:5,color:'gray'}}>{'Food,Equipment included'}</Text>
            </View>
          </View>
                <TouchableOpacity style={{borderRadius:5,flex:1,backgroundColor:'#f8f8f8',borderColor:'gray',borderWidth:1,marginVertical:10,marginHorizontal:10, justifyContent:'center',height:40}}>
              <Text style={{textAlign:'center',color:'gray',fontSize:16,}}>Show all experiances</Text>
            </TouchableOpacity>
                 <Text style={styles.titleTxt}>{"Aertan Plus places to stay"}</Text>
                  <Text style={{fontSize:14, marginHorizontal:10}}>{"A selection of places to stay verified for quality and design."}</Text>
          <Card style={{flex:1,height:250, marginHorizontal:15,marginVertical:15, }}> 
          <ImageBackground source={require('../assets/primiumBackground.jpg')} style={{flex:1}}>
            <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AertanPlus1')}} style={{borderRadius:10,backgroundColor:'#f8f8f8',borderColor:'gray',borderWidth:1,marginHorizontal:70, justifyContent:'center', marginTop:150,height:50}}>
              <View style={{flexDirection:'row'}}>
                  <Text style={{textAlign:'center',color:'gray',fontWeight:'bold',fontSize:20,flex:1,marginHorizontal:5}}>{'Explore Stays'}</Text>
                  <Image source={require('../assets/AertanPlusImages/play_24px.png')} style={{marginHorizontal:10}}/>
              </View>
            </TouchableOpacity>
          </ImageBackground>  
          </Card>
          <Text style={styles.titleTxt}>{"Place to stay around the world"}</Text>
          <FlatList  
                  data={this.state.Stays}
                  horizontal
                  renderItem={(item)=>
                  <View style={styles.container}> 
                  <TouchableOpacity>
                  <Card style={{width:160,height:160,borderRadius:20, marginHorizontal:15,marginVertical:15,shadowColor:'black',shadowOffset:{width:5,height:5},shadowOpacity:0.2,levation:2,}}>
                  <Image source={item.item.img} style={{flex:1,borderRadius:20}}/>
                </Card>
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
  titleTxt:{
    fontSize:25,
    marginHorizontal:10,
    marginVertical:5,
    fontFamily: "AppleSDGothicNeo-UltraLight",
    fontWeight: "bold",
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



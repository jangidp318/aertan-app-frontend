import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';


export default class Listing extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isLoading : false,
      listData:  [
      {title: 'Property and guest'},
      {title: 'Location'},
      {title: 'Amenities'},
      {title: 'Photos'},
      {title: 'Title'},
      {title: 'Booking setting'},
      {title: 'Availability'},
      {title: 'Pricing'},
    ]
    }
  }
  componentDidMount(){
    let arr = this.state.listData.map((item, index) =>{
      item.isSelected = false
      return {...item};
    })
    this.setState({listData: arr});
    console.log('arr data==> ',arr);
  }


  goToLoad =()=>{
    this.setState({isLoading:true});
  };
  selectionHandler=(ind)=>{
    const {listData} = this.state;
    let arr = listData.map((item, index)=>{
      if(ind == index){
        item.isSelected = !item.isSelected
      }
      return {...item}
    })
    console.log('Selection Handler ==>', arr)
    this.setState({listData:arr})
  }
  

  render(){
    const {isLoading, listData} = this.state;
    return(
    <View style={styles.container}>
      <View style={{height:'25%',backgroundColor:'#03866c'}}>
        <View style={{alignSelf:'left', marginHorizontal:20,marginTop:30}}>
        <Icon 
            name='close' 
            color ='white'
            size = '30'
        />
        </View>
        <Text style={{marginHorizontal:20,fontSize:30,fontWeight:'bold',color:'white',marginVertical:20}}>{"Let's set up your listing"}</Text>
      </View>
        
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}> 
        <View style={{marginHorizontal:20, marginTop:20}}>
        { listData.map((item, index) =>{
            return(
              <View>
              <TouchableOpacity onPress={()=>this.selectionHandler(index)} style={{flexDirection:'row',justifyContent:'space-between' }}>
                <Text style={{fontSize:18, marginVertical:20, color:'gray'}}>{item.title}</Text>
                <Text style={{marginVertical:20}}>
                  {item.isSelected ? <Icon 
                  name = 'check' 
                  color = "#03866c"
                  size = '30' 
                  />
                  :" "} 
                </Text>
              </TouchableOpacity>
              
              <Card style={{height:0.5,backgroundColor:'#D3D3D3'}}></Card>
              </View>
              
            );
        })
        }
          
        </View>



      </ScrollView>


      <Card style={{backgroundColor:'white',height:'10%',}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20}}>
            <TouchableOpacity>
                <Text style={{fontSize:16,textAlign:'center',justifyContent:'center',marginVertical:25, fontWeight :'bold', color:'#03866c'}}>{"Preview"}</Text>
            </TouchableOpacity> 
            <TouchableOpacity style={{backgroundColor:'#03866c', height:50,borderRadius:5, marginVertical:10,}}>
                <Text style={{fontSize:16,textAlign:'center',justifyContent:'center',marginHorizontal:20,marginVertical:15, fontWeight :'bold', color:'white'}}>{"Next"}</Text>
            </TouchableOpacity>
          </View>
      </Card>

      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    

  },
 
})



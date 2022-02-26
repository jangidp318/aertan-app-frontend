import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet,ImageBackground, Text, View, Image,TextInput, Button, TouchableOpacity, Alert, FlatList, SafeAreaView, ScrollView,SectionList, Header} from 'react-native';
import {useNavigation} from '@react-navigation/native'
import {SearchBar,} from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';


export default class Amenities extends React.Component{
  constructor(props){
    super(props);
    this.state ={
      isLoading : false,
      listData:  [
      {title: 'Essentials', data :'Towels, bed sheet, soap, toilet, and pillows'},
      {title: 'Wifi', data:'Continues access in the listing'},
      {title: 'Kitchen', data:'space where guests can cook their own meals'},
      {title: 'Free parking on premises'},
      {title: 'TV'},
      {title: 'Hot water'},
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
        
        <Card style={{shadowColor:'black',
              shadowOffset:{width:0,height:1},
              shadowOpacity:0.3,
              levation:2, 
              position:'relative',}}>
        <View style={{ marginHorizontal:20,marginTop:30,marginVertical:10,flexDirection:'row',justifyContent:'space-between'}}>
          <Icon 
            name='close' 
            size = '25'
            alignSelf='left'
          />
          <Button title="Clear all" color='black' marginBottom='20' onPress={()=>{this.componentDidMount()}}></Button>
         </View>
        </Card>
       
     
        
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}> 
        <Text style={{marginHorizontal:20,fontSize:30,fontWeight:'bold',color:'Black',marginVertical:10}}>{"What amenities will you offer?"}</Text>
        <Text style={{fontSize:12, fontWeight:'bold',color:'gray',marginHorizontal:20,marginVertical:10}}>{"Aenean et molesite risus. Vivamus quis metus nec magna mollis consectetur. Nam nulla lorem, vestibulum faucibus cursus placerat, dapibus id turpis."}</Text>
        <View style={{marginHorizontal:20, marginTop:20}}>
        { listData.map((item, index) =>{
            return(
              <View>
                <View style={{flexDirection:'row',justifyContent:'space-between' }}>              
                  <View>
                    <Text style={{fontSize:20, marginVertical:5,marginTop:20}}>{item.title}</Text>
                    <Text style={{fontSize:12,marginBottom:10,color:'gray'}}>{item.data}</Text>
                  </View>
                  <TouchableOpacity onPress={()=>this.selectionHandler(index)} > 
                    <Text style={{marginVertical:20}}>
                      {item.isSelected ? <Image source={require('../assets/circleFilled.png')} style={{borderWidth:5,borderColor:'#03866c',borderRadius:14}}/>
                      :<Image source={require('../assets/circleHollow.png')}/>} 
                    </Text>
                  </TouchableOpacity>
                </View>
              <Card style={{height:0.5,backgroundColor:'#D3D3D3'}}></Card>
              </View>
              
            );
        })
        }
          
        </View>



      </ScrollView>

      <TouchableOpacity style={{backgroundColor:'#03866c', height:50,borderRadius:5, marginVertical:10,marginHorizontal:20,alignSelf:'flex-end'}}>
        <Text style={{fontSize:16,textAlign:'center',justifyContent:'center',marginHorizontal:20,marginVertical:15, fontWeight :'bold', color:'white'}}>{"Next"}</Text>
      </TouchableOpacity>    
    
      
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'

  },
 
})



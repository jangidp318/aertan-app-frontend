import React, {useState, useRef} from 'react';
import {View, Text, Alert, StyleSheet, Pressable,Image,ScrollView,TouchableOpacity} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { Card } from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {creatStackNavigator} from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

const navigation = useNavigation

const SignUpPage = ({ navigation }) => {
  const [phoneNumber,setphoneNumber] = useState('');
  const phoneInput = useRef(null); 
  
  return (
    <View style={styles.container}>
    <ScrollView>
    
    <TouchableOpacity onPress={()=>{navigation.push('HomeScreen')}} style={{marginHorizontal:20,marginTop:40,alignSelf:'left'}}>
    <Icon 
        name = 'close'
        size = '30' 
    />
    </TouchableOpacity>
      <Image
        source={require('../assets/AertanLogo.png')}
        style={{ width: 150,height:50, resizeMode: 'contain', marginLeft:20,marginVertical:30,alignItems:'left'}}
      />
      <Text style={{fontSize:22,marginHorizontal:20,fontWeight:'bold'}}>{'Join the Aertan \ncommunity'}</Text>
      <Text style={{fontSize:18,marginHorizontal:20,fontWeight:'',marginVertical:20}}>{'Phone number'}</Text>
      <PhoneInput
        
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="IN"
        layout="second"
        withShadow
        autoFocus
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {
        setphoneNumber(text);
        }}
      />
      <Text style={{fontSize:14,marginHorizontal:20,fontWeight:'',marginVertical:20}}>{"We'll call or text you confirm your number. Standard message and data rates apply."}</Text>
      <Pressable style={styles.button} onPress={() => {if(phoneNumber.length == 13){
      navigation.push('OTP',{phoneNumber})
    }
    else{
      Alert.alert('Enter a 10 digit Phone no.')
    }}}>
        <Text style={{color:'white'}}>{"Sign up with phone number"}</Text>
      </Pressable>
<View style={{flexDirection:'row'}}>
<Card style={{flex:1,backgroundColor:'#D3D3D3',height:1,marginHorizontal:20,marginVertical:10}}></Card>
<Text style={{fontSize:16,fontWeight:'bold',color:'gray'}}>{"OR"}</Text>
<Card style={{flex:1,backgroundColor:'#D3D3D3',height:1,marginHorizontal:20,marginVertical:10}}></Card>
</View>

      <TouchableOpacity style={{flexDirection:'row',borderColor:'gray',borderWidth:1,marginHorizontal:20,marginVertical:10,borderRadius:5}}>
      <Image source={require('../assets/SignUpPage/facebookLogo.png')} style={{marginHorizontal:10,marginVertical:5}}/>
      <Text style={{marginVertical:20,fontWeight:'bold',marginHorizontal:20}}>{"Continue with Facebook"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection:'row',borderColor:'gray',borderWidth:1,marginHorizontal:20,marginVertical:10,borderRadius:5}}>
      <Image source={require('../assets/SignUpPage/googleLogo.png')} style={{marginHorizontal:10,marginVertical:5}}/>
      <Text style={{marginVertical:20,fontWeight:'bold',marginHorizontal:20}}>{"Continue with Google"}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{flexDirection:'row',borderColor:'gray',borderWidth:1,marginHorizontal:20,marginVertical:10,borderRadius:5}}>
      <Image source={require('../assets/SignUpPage/appleLogo.png')} style={{marginHorizontal:10,marginVertical:5}}/>
      <Text style={{marginVertical:20,fontWeight:'bold',marginHorizontal:20}}>{"Continue with Apple"}</Text>
      </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  phoneContainer: {
    width: '90%',
    height: 50,
    marginHorizontal:20
  },
  button: {
    marginVertical:10,
    width: '90%',
    height:50,
    padding: 10,
    borderRadius:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e75480',
    marginHorizontal:20
  },
  textInput: {
    paddingVertical: 0,
  },
});

export default SignUpPage;
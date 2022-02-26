import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import { Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { creatStackNavigator } from '@react-navigation/stack';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {Icon} from 'react-native-elements';

const navigation = useNavigation

export default class OTP extends React.Component {
  constructor(props){
    super(props);
   this.state = {
     phonNumber: '0987654321',
     }
  
  }
  
  render() {
    console.log(this.props.route.params.phoneNumber);
    const number = this.props.route.params.phoneNumber
    let codeEntered =''
    function otpGen() {
      var otpCode = Math.floor(1000 + Math.random() * 9000);
      return otpCode;
    }

    let genCode = otpGen();
    console.log(genCode);
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity onPress={()=>{this.props.navigation.navigate('SignUp')}} style={{marginHorizontal:10,marginTop:30,alignSelf:'left'}}>
          <Icon 
          name = 'chevron-left' 
          size = '50'
          />
      </TouchableOpacity>
	
	<Text style={{fontSize:32,fontWeight:'bold', marginHorizontal:20,marginVertical:20}}>{'Confirm your \nnumber'}</Text>
        <Text style={{marginHorizontal:20}} >{'Enter the 4-digit code Aertan just sent to'}</Text>
	      <Text style={{marginHorizontal:20}}>{number}:</Text>
      

        <OTPInputView
          style={{ width: '80%', height: 200, marginHorizontal:20 }}
          pinCount={4}
          //code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          //onCodeChanged = {code => { this.setState({code})}}
          autoFocusOnLoad
          secureTextEntry={false}
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={(code) => {
            codeEntered=code
          }}
          
        />
      <View style={{flexDirection:'row',}}>
        <Text style={{marginLeft:20}}>{"Didn't get a text?"}</Text>
        <TouchableOpacity onPress ={() => {
          genCode = otpGen();
          console.log(genCode); 
          }}>
        <Text style={{fontWeight:'bold',textDecorationLine: 'underline'}}>{" Try again"}</Text>
        </TouchableOpacity>
        
      </View>
      <Text style={{ marginLeft:20,marginVertical:20,fontWeight:'bold',textDecorationLine: 'underline'}}>{"Call me instead"}</Text>
      <Pressable style={styles.button} onPress={ () => 
      {
        if (codeEntered==genCode) 
          {this.props.navigation.navigate('HomeScreen')}
        else {Alert.alert('Enterd code is Wrong')}
      
      }}>
        <Text style={{color:'white'}}>{"Continue"}</Text>
      </Pressable>

      </ScrollView>
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  underlineStyleBase: {
    width: 60,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color:'black'
  },

  underlineStyleHighLighted: {
    borderColor: 'black',
  },
});



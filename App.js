import 'react-native-gesture-handler';
import {
  Image,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  Platform,
  ScrollView,
  BackHandler,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './components/SplashScreen';
import Home from './components/HomePage';
import Profile from './components/ProfilePage';
import AertanPlus1 from './components/AertanPlus1';
import AertanPlus2 from './components/Aertanplus2';
import Inbox from './components/Inbox';
import SignUp from './components/SignUpScreen';
import OTP from './components/OTP';
import Saved from './components/Saved';
import Trips from './components/Trips';
import Publishing from './components/Publishing';
import Listing from './components/listing';
import Amenities from './components/Amenities';
import Payments from './components/Payments';

import TestFont from './components/TestFont';

const Stack = createStackNavigator();

const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="SignUp" >
      <Stack.Screen name="HomeScreen" component={Home} options={{headerShown:false}} />
      <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
      <Stack.Screen name="AertanPlus1" component={AertanPlus1} options={{headerShown:false}} />
      <Stack.Screen name="TestFont" component={TestFont} options={{headerShown:false}} />
      <Stack.Screen name="Inbox" component={Inbox} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}} />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown:false}} />
      <Stack.Screen name="Saved" component={Saved} options={{headerShown:false}} />
      <Stack.Screen name="Trips" component={Trips} options={{headerShown:false}} />
      <Stack.Screen name="AertanPlus2" component={AertanPlus2} options={{headerShown:false}} />
      <Stack.Screen name="Publishing" component={Publishing} options={{headerShown:false}} />
      <Stack.Screen name="Listing" component={Listing} options={{headerShown:false}}/>
      <Stack.Screen name="Amenities" component={Amenities} options={{headerShown:false}}/>
      <Stack.Screen name="Payments" component={Payments} options={{headerShown:false}}/>

    </Stack.Navigator>
  );
};

const App = () => {
  //const navigation = useNavigation()
  return ( 
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          // Hiding header for Splash Screen
          options={{ headerShown: false }}
        />
        {/* Auth Navigator: Include Login and Signup */}
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
    
  );
};
export default App;
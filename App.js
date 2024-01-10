import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import {NavigationContainer} from '@react-navigation/native';
import List from './List';
import HomeCleaning from './src/HomeCleaning';
import WorkerDetails from './src/WorkerDetails';
import Sechudle from './src/Sechudle';
import Booking from './src/Booking';
import Address from './src/Address';
import Profile from './src/Profile';
import EditProfile from './src/EditProfile';
import Login from './src/Login';
import OtpScreen from './src/OtpScreen';
import Chats from './src/Chats';
import MyBookings from './src/MyBookings';
import ChatScreen from './src/ChatScreen';
import BookingDetails from './src/BookingDetails';
import BookingScreen from './src/BookingScreen';
import BookingScreen1 from './src/BookingScreen1';
import PaymentScreen from './src/PaymentScreen';
import Team from './src/Team';
import Location from './src/Location';
import SelectLocation from './src/SelectLocation';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'orange'} />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} /> 
      <Stack.Screen name="HomeCleaning" component={HomeCleaning} />
      <Stack.Screen name="WorkerDetails" component={WorkerDetails} />
      <Stack.Screen name="Sechudle" component={Sechudle} />
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="OtpScreen" component={OtpScreen} />
      <Stack.Screen name="MyBookings" component={MyBookings} />
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="BookingDetails" component={BookingDetails} />
      <Stack.Screen name="BookingScreen" component={BookingScreen} />
        <Stack.Screen name="BookingScreen1" component={BookingScreen1} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
        <Stack.Screen name="Team" component={Team} />*/}
         <Stack.Screen name="Location" component={Location} /> 
         <Stack.Screen name="SelectLocation" component={SelectLocation} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

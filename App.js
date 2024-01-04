import { View, Text,StatusBar } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import List from './List';
import HomeCleaning from './src/HomeCleaning'
import WorkerDetails from './src/WorkerDetails'
import Sechudle from './src/Sechudle'
import Booking from './src/Booking';
import Address from './src/Address';
import Profile from './src/Profile';
import EditProfile from './src/EditProfile';

const Stack = createStackNavigator();

const App = () => {
  return (
    
    <NavigationContainer>
      <StatusBar backgroundColor={'orange'}/>
    <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      {/* <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="List" component={List} /> 
      <Stack.Screen name="HomeCleaning" component={HomeCleaning} />
      <Stack.Screen name="WorkerDetails" component={WorkerDetails} />
      <Stack.Screen name="Sechudle" component={Sechudle} />*/}
      <Stack.Screen name="Address" component={Address} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      
    </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
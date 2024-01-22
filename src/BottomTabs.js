import {View,Text} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import HomeMain from './HomeMain';
import Profile from './Profile';
import Chats from './Chats';
import HomeScreen from './HomeScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName="Home"
       
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: 'white',
      tabBarLabelPosition: 'beside-icon',
      tabBarStyle: {
        backgroundColor: '#183F79',
      },
      tabBarItemStyle: {
        borderRadius: 200,
        padding:5,margin:5
      },
    //  tabBarShowLabel:false,
        //    tabBarLabelStyle: { fontSize: 10 },
          // tabBarInactiveTintColor: 'black',
          tabBarActiveBackgroundColor: 'white',
    }}  
    >
    <Tab.Screen 
      name="HomeMain"
      component={HomeMain}
      options={{
        tabBarIcon: ({ color, size,focused }) => (
          <MaterialCommunityIcons name="home" color={focused?'#183F79':'white'} size={20}  style={{}}/>
        ),
        tabBarLabel:({focused})=>(
          focused &&(
            <Text style={{color:'#183F79',paddingLeft:20,}}>Home</Text>
          )
        )
       }}
      />
       <Tab.Screen 
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size,focused }) => (
          
          <MaterialCommunityIcons name="shopping-outline" color={focused?'#183F79':'white'} size={20}  style={{}}/>
          
        ),
        tabBarLabel:({focused})=>(
          focused &&(
            <Text style={{color:'#183F79',paddingLeft:15,fontSize:10}}>Shopping</Text>
          )
        ),
       }}
      />

       <Tab.Screen 
      name="Chats"
      component={Chats}
      options={{
        tabBarIcon: ({ color, size,focused }) => (
          <MaterialCommunityIcons name="chat-processing-outline" color={focused?'#183F79':'white'} size={20}  style={{}}/>
        ),
        tabBarLabel:({focused})=>(
          focused &&(
            <Text style={{color:'#183F79',paddingLeft:15,}}>Chat</Text>
          )
        )
       }}
      />
       <Tab.Screen 
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ color, size,focused }) => (
          <AntDesign name="user" color={focused?'#183F79':'white'} size={20}  style={{}}/>
        ),
        tabBarLabel:({focused})=>(
          focused &&(
            <Text style={{color:'#183F79',paddingLeft:15,alignSelf:'center'}}>Profile</Text>
          )
        )
       }}
      />
   
  </Tab.Navigator>
  );
}

export default BottomTabs;

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const MyBookings = () => {
  const navigation=useNavigation()

  const data=[
    {id:1,name:'Venkatesh',role:'Full Home Claening',time:'Today: 10.00 AM',image:require('../assets/profile2.png')},
    {id:2,name:'Venkatesh',role:'Full Home Claening',time:'Today: 10.00 AM',image:require('../assets/profile2.png')}
  ]
  const data1=[
    {id:1,name:'Venkatesh',role:'Full Home Claening',time:'Today: 10.00 AM',image:require('../assets/profile1.png')},
    {id:2,name:'Venkatesh',role:'Full Home Claening',time:'Today: 10.00 AM',image:require('../assets/profile1.png')},
    {id:3,name:'Venkatesh',role:'Full Home Claening',time:'Today: 10.00 AM',image:require('../assets/profile1.png')},
    
  ]

  const Item = ({item})=>{
    return(
      <View style={{width:'100%',alignSelf:'center',marginTop:10}}>
     
        <TouchableOpacity style={{flexDirection:'row',backgroundColor:'white',padding:10,borderRadius:5}}> 
              <Image
                   source={item.image}
                   style={{width:80,height:80,borderRadius:5,alignSelf:'center'}}
                   
                 />
                 <View style={{marginLeft:10}}>
                 <Text style={{color:'black',fontSize:20,margin:5}}>{item.name}</Text>
                 <Text style={{fontSize:12,margin:5}}>{item.role}</Text>
                 <View style={{flexDirection:'row',margin:5,}}>
                 <TouchableOpacity style={{backgroundColor:'black',padding:5,flexDirection:'row',borderRadius:5}}>
                 <AntDesign
                  name='clockcircleo'
                  size={15}
                  color={'white'}
                  // style={{backgroundColor:'white',}}
                   />
                 <Text style={{alignSelf:'center',marginLeft:10,color:'white',fontSize:10}}>{item.time}</Text>
                 </TouchableOpacity>
                 <AntDesign
                  name='checkcircleo'
                  size={25}
                  color={'orange'}
                  style={{marginLeft:10,alignSelf:'center'}}
                   />
                 </View>
                 </View>
                 <View style={{backgroundColor:'#A7A7A7',width:1}}/>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        
                <FontAwesome
                onPress={()=>navigation.navigate('')}
                  name='phone'
                  size={25}
                  color={'black'}
                  style={{marginLeft:20,alignSelf:'center'}}
                   />
                  
                  <MaterialCommunityIcons
                  onPress={()=>navigation.navigate('Chats')}
                  name='chat-processing'
                  size={25}
                  color={'black'}
                  style={{marginLeft:20,alignSelf:'center'}}
                   />
                </View>
    </TouchableOpacity>
       
      </View>
    )
  }
  const Item1 = ({item})=>{
    return(
      <View style={{width:'100%',alignSelf:'center',marginTop:10}}>
     
      <TouchableOpacity style={{flexDirection:'row',backgroundColor:'white',padding:10,borderRadius:5}}> 
            <Image
                 source={item.image}
                 style={{width:80,height:80,borderRadius:5,alignSelf:'center'}}
                 
               />
               <View style={{marginLeft:10}}>
               <Text style={{color:'black',fontSize:20,margin:5}}>{item.name}</Text>
               <Text style={{fontSize:12,margin:5}}>{item.role}</Text>
               <View style={{flexDirection:'row',margin:5,}}>
               <TouchableOpacity style={{backgroundColor:'black',padding:5,flexDirection:'row',borderRadius:5}}>
               <AntDesign
                name='clockcircleo'
                size={15}
                color={'white'}
                // style={{backgroundColor:'white',}}
                 />
               <Text style={{alignSelf:'center',marginLeft:10,color:'white',fontSize:10}}>{item.time}</Text>
               </TouchableOpacity>
              
               </View>
               </View>
               <View style={{backgroundColor:'#A7A7A7',width:1,marginLeft:10}}/>
               <View style={{marginTop:10}}>
               <AntDesign
                name='checkcircleo'
                size={25}
                color={'orange'}
                style={{marginLeft:10,alignSelf:'center'}}
                 />
              <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20,margin:10}}>
      
              <FontAwesome
              onPress={()=>navigation.navigate('')}
                name='phone'
                size={25}
                color={'black'}
                style={{marginLeft:20,alignSelf:'center'}}
                 />
                
                <MaterialCommunityIcons
                onPress={()=>navigation.navigate('Chats')}
                name='chat-processing'
                size={25}
                color={'black'}
                style={{marginLeft:20,alignSelf:'center',}}
                 />
              </View>
              </View>
  </TouchableOpacity>
     
    </View>
    )
  }

  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
  <View style={{flexDirection:'row',margin:20,}}> 
    <AntDesign
//   onPress={()=>navigation.goBack()}
    name='leftcircle'
   size={35}
   color={'black'}
   style={{backgroundColor:'white',borderRadius:25}}
   />
  <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>My Bookings</Text>
  </View>
  <ScrollView>
    <ScrollView>
    <View style={{alignSelf:'center'}}>
            <FlatList
            data={data}
            renderItem={Item}
            keyExtrator={item =>item.id}
            />
         </View>
    </ScrollView>
    <Text style={{margin:10,fontSize:20,fontWeight:'bold',color:'white',marginLeft:10}}>Upcoming Bookings</Text>
    <Text style={{marginLeft:20}}>Today</Text>
    <ScrollView>
    <View style={{alignSelf:'center',marginTop:10,marginBottom:20}}>
            <FlatList
            data={data1}
            renderItem={Item1}
            keyExtrator={item =>item.id}
            />
         </View>
      </ScrollView>
     </ScrollView>
    </LinearGradient>
  );
}

export default MyBookings;

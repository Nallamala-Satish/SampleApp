import React from 'react';
import { View, Text,StyleSheet,TouchableOpacity,Image,FlatList,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'

const MyBookings = () => {

  const data=[
    {id:1,name:'venkatesh',role:'Full Home Claening',time:'Today: 10.00 AM',image:require('../assets/profile.png')}
  ]
  const data1=[]

  const Item = ({item})=>{
    return(
      <View>
        <TouchableOpacity style={{padding:10}}>
        <View style={{flexDirection:'row',margin:20,backgroundColor:'white',padding:10}}> 
              <Image
                   source={item.image}
                   style={{width:50,height:50,borderRadius:5,alignSelf:'center'}}
                   
                 />
                 <View>
                 <Text style={{alignSelf:'center',marginLeft:20,color:'black',fontSize:20}}>{item.name}</Text>
                 <TouchableOpacity style={{backgroundColor:'black',padding:10,flexDirection:'row'}}>
                 <AntDesign

                  name='clockcircleo'
                  size={25}
                  color={'white'}
                  // style={{backgroundColor:'white',}}
                   />
                 <Text style={{alignSelf:'center',marginLeft:20,color:'white',fontSize:10}}>{item.time}</Text>
                 </TouchableOpacity>
                 </View>
        
    </View>
        </TouchableOpacity>
      </View>
    )
  }
  const Item1 = ({item})=>{
    return(
      <View>
        
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
  <Text style={{color:'black',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Edit Profile</Text>
  </View>
  <View>
    <ScrollView>
    <View style={{alignSelf:'center'}}>
            <FlatList
            data={data}
            renderItem={Item}
            keyExtrator={item =>item.id}
            />
         </View>
    </ScrollView>
    <ScrollView>
    <View style={{alignSelf:'center'}}>
            <FlatList
            data={data1}
            renderItem={Item1}
            keyExtrator={item =>item.id}
            />
         </View>
      </ScrollView>
     </View>
    </LinearGradient>
  );
}

export default MyBookings;

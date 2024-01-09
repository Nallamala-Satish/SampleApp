import React from 'react';
import { View, Text,ScrollView,FlatList,TouchableOpacity,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'

const Team = () => {
    const data=[
        {id:1,name:'Venkatesh',role:'Plumber',time:'Today, 10.00 AM',image:require('../assets/profile.png')},
        {id:2,name:'Venkatesh',role:'Cleaner',time:'Today, 12.00 PM',image:require('../assets/profile1.png')},
        {id:3,name:'Venkatesh',role:'Cleaner',time:'Today, 03.00 PM',image:require('../assets/profile2.png')},
        {id:4,name:'Venkatesh',role:'Plumber',time:'Today, 06.00 PM',image:require('../assets/profile.png')},
        {id:5,name:'Venkatesh',role:'Plumber',time:'Today, 10.00 PM',image:require('../assets/profile1.png')},
        {id:6,name:'Venkatesh',role:'Cleaner',time:'Today, 05.00 AM',image:require('../assets/profile2.png')},
      ]
      
      const Item=({item})=>{
        return(
          <View style={{marginTop:10,marginLeft:10}}>
         
            <TouchableOpacity style={{flexDirection:'row',padding:10,borderRadius:5,justifyContent:'space-between',}}> 
               <View style={{flexDirection:'row',padding:10,borderRadius:5}}>
                  <Image
                       source={item.image}
                       style={{width:70,height:70,borderRadius:5,alignSelf:'center'}}
                       
                     />
                     <View style={{marginLeft:10}}>
                     <Text style={{color:'white',alignSelf:'center'}}>{item.time}</Text>
                     <Text style={{color:'black',fontSize:15,margin:5}}>{item.name}</Text>
                     <Text style={{fontSize:12,marginLeft:10,color:'white',}}>{item.role}</Text>
                    </View>
                  </View>
                 
             </TouchableOpacity>
             <View style={{backgroundColor:'white',height:1,width:'90%',alignSelf:'center'}}/>
          </View>
        )
      }
  return (
    <LinearGradient   colors={['#D70303', '#2405DF']} style={{flex:1}}>
    <View style={{flexDirection:'row',margin:10,}}> 
      <AntDesign
    //   onPress={()=>navigation.goBack()}
      name='leftcircle'
      size={35}
      color={'black'}
      style={{backgroundColor:'white',borderRadius:25}}
      />
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:100}}>Bookings</Text>
      </View>
    <ScrollView>
  <View style={{marginBottom:30,}}>
          <FlatList
          data={data}
          renderItem={Item}
          keyExtrator={item =>item.id}
          />
       </View>
  </ScrollView>
  </LinearGradient>
  )
}

export default Team
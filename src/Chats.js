import React from 'react';
import { View, Text,ScrollView,FlatList,TouchableOpacity,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Chats = () => {

  const data=[
    {id:1,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile.png')},
    {id:2,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile1.png')},
    {id:3,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile2.png')},
    {id:4,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile.png')},
    {id:5,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile1.png')},
    {id:6,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile2.png')},
    {id:7,name:'Venkatesh',message:'hello,how can i help you ?',time:'1hr ago',image:require('../assets/profile2.png')},
  ]
  
  const Item=({item})=>{
    return(
      <View style={{alignSelf:'center',marginTop:10}}>
     
        <TouchableOpacity style={{flexDirection:'row',padding:10,borderRadius:5,justifyContent:'space-between',width:'90%',}}> 
           <View style={{flexDirection:'row',padding:10,borderRadius:5}}>
              <Image
                   source={item.image}
                   style={{width:50,height:50,borderRadius:5,alignSelf:'center'}}
                   
                 />
                 <View style={{marginLeft:10}}>
                 <Text style={{color:'black',fontSize:15,margin:5}}>{item.name}</Text>
                 <Text style={{fontSize:12,margin:5}}>{item.message}</Text>
                </View>
              </View>
              <View style={{alignSelf:'center'}}>
                 <Text style={{color:'white',alignSelf:'center'}}>{item.time}</Text>
              </View>
         </TouchableOpacity>
         <View style={{backgroundColor:'white',height:1,}}/>
      </View>
    )
  }
  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
      <Text style={{alignSelf:'center',fontWeight:'bold',fontSize:25,color:'white',margin:20}}>Chats</Text>
      <ScrollView>
    <View style={{alignSelf:'center',marginBottom:30}}>
            <FlatList
            data={data}
            renderItem={Item}
            keyExtrator={item =>item.id}
            />
         </View>
    </ScrollView>
    </LinearGradient>
  );
}

export default Chats;

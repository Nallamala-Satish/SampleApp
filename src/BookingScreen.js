import React from 'react';
import { View, Text,Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'

const BookingScreen = () => {
  return (
    <LinearGradient  colors={['#D70303', '#2405DF']} style={{flex:1}}>
    <View style={{flexDirection:'row',margin:20,}}> 
<AntDesign
//   onPress={()=>navigation.goBack()}
name='leftcircle'
size={35}
color={'black'}
style={{backgroundColor:'white',borderRadius:25}}
/>
<Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:50}}>Booking </Text>
</View>
           
    <View style={{backgroundColor:'white',alignSelf:'center',justifyContent:'center',height:150,width:200,marginTop:150}}>
              <Image
                   source={require('../assets/profile2.png')}
                   style={{width:40,height:40,borderRadius:5,alignSelf:'center',marginTop:10}}
                   
                 />
      <Text style={{alignSelf:'center',padding:10}}>Are you sure</Text>
      <Text style={{alignSelf:'center',fontSize:10,}}>Do you want to </Text>
      <Text style={{alignSelf:'center',fontSize:10,}}>accept the work ? </Text>
         <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:20}}>
         <AntDesign
                name='checkcircleo'
                size={25}
                color={'orange'}
                style={{marginLeft:10,alignSelf:'center'}}
                 />
                 <View style={{width:1,backgroundColor:'black'}}/>
           <AntDesign
                name='closecircleo'
                size={25}
                color={'orange'}
                style={{marginLeft:10,alignSelf:'center'}}
                 />
                       
         </View>
         <TouchableOpacity style={{backgroundColor:'black',padding:5,marginTop:20}}>
                    <Text style={{alignSelf:'center',color:'white'}}>Submit</Text>
        </TouchableOpacity> 

    </View>
    <View style={{marginTop:150,}}>
            <TouchableOpacity style={{padding:10,backgroundColor:'white',width:'70%',margin:5,borderRadius:5,marginTop:20,alignSelf:'center'}}
            onPress={()=>{}}>
                  <Text style={{alignSelf:'center',color:'black'}}>Marks as complete</Text>
            </TouchableOpacity>
         </View>
    </LinearGradient>
  );
}

export default BookingScreen;

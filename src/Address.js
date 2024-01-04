import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Foundation from 'react-native-vector-icons/Foundation'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { TextInput } from 'react-native-paper';


const Address = () => {
    const navigation=useNavigation()
    const [text, setText] = React.useState("");
    const [address, setAddress] = React.useState("");

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
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Select Address</Text>
      </View>
    <View style={{margin:10}}>
    <View style={{flexDirection:'row'}}>
        <Entypo
      name='home'
      size={25}
      color={'black'}
      style={{backgroundColor:'white',borderRadius:100,padding:15}}
      />
        <TextInput
      label=""
      value={address}
      onChangeText={text => setAddress(text)}
      underlineColor='white'
      activeUnderlineColor='white'
      textColor='black'
      style={{width:'70%',marginLeft:20,backgroundColor:'orange',}}
    />
        </View>
        
        <View style={{flexDirection:'row',marginTop:20}}>
        <Foundation
      name='shopping-bag'
      size={25}
      color={'black'}
      style={{backgroundColor:'white',borderRadius:100,padding:15}}
      />
        <TextInput
      label=""
      value={text}
      onChangeText={text => setText(text)}
      underlineColor='white'
      activeUnderlineColor='white'
      textColor='black'
      style={{width:'70%',marginLeft:20,backgroundColor:'orange',}}
    />
        </View>
    
    </View>
    <View style={{marginTop:50,}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'95%',margin:5,borderRadius:5,marginTop:20}}
            onPress={()=>navigation.navigate('Booking')}>
                  <Text style={{alignSelf:'center',color:'black'}}>Continue</Text>
            </TouchableOpacity>
         </View>
    </LinearGradient>
  )
}

export default Address
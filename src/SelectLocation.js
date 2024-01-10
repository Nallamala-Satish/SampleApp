import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome6'

const SelectLocation = () => {
  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
        <View>
    <View style={{flexDirection:'row',justifyContent:'space-around',padding:5,backgroundColor:'white',borderRadius:5,margin:20,width:'90%'}}>
    <AntDesign
    //   onPress={()=>navigation.goBack()}
      name='left'
      size={20}
      color={'black'}
      style={{}}
      />
      <Text style={{}}>Enter Building/Society/Landmark/Location</Text>
    </View>
    <View style={{margin:20}}>
        <TouchableOpacity style={{flexDirection:'row',margin:5}}>
        <EvilIcons
    //   onPress={()=>navigation.goBack()}
      name='location'
      size={20}
      color={'black'}
      style={{}}
      /> 
      <Text style={{marginLeft:10,color:'black'}}>Begumpet,Hyderabad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',margin:5}}>
        <EvilIcons
    //   onPress={()=>navigation.goBack()}
      name='location'
      size={20}
      color={'black'}
      style={{}}
      /> 
      <Text style={{marginLeft:10,color:'black'}}>Madhapur,Hyderabad</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection:'row',margin:5}}>
        <EvilIcons
    //   onPress={()=>navigation.goBack()}
      name='location'
      size={20}
      color={'black'}
      style={{}}
      /> 
      <Text style={{marginLeft:10,color:'black'}}>Kukatpally,Hyderabad</Text>
        </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',alignSelf:'center',margin:0}}>
    <View style={{backgroundColor:'white',height:1,width:'40%',alignSelf:'center'}}/>
    <Text style={{padding:10,backgroundColor:'white',borderRadius:50}}>OR</Text>
    <View style={{backgroundColor:'white',height:1,width:'40%',alignSelf:'center'}}/>
    </View>
    <View style={{marginTop:50}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'90%',margin:5,borderRadius:30,alignSelf:'center',
            marginTop:20,flexDirection:'row',justifyContent:'space-evenly'}}
            onPress={()=>{}}>
                     <FontAwesome
                   //   onPress={()=>navigation.navigate('')}
                       name='location-crosshairs'
                       size={20}
                       color={'black'}
                       style={{}}
                    />
                  <Text style={{alignSelf:'center',color:'black'}}>Use My Current Location</Text>
            </TouchableOpacity>
         </View>
    </View>
    </LinearGradient>
  )
}

export default SelectLocation
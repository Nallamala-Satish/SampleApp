import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

const Location = () => {
  const navigation = useNavigation()

  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
    <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
    <FontAwesome
    //   onPress={()=>navigation.navigate('SelectLocation')}
      name='location-arrow'
      size={50}
      color={'black'}
      style={{backgroundColor:'white',borderRadius:100,padding:50,}}
      />
    </View>
    <Text style={{alignSelf:'center',fontWeight:'bold',color:'black',fontSize:20}}>Where do you want to service ? </Text>
    <View style={{marginBottom:30}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'black',width:'90%',margin:5,borderRadius:30,marginTop:20,alignSelf:'center'}}
            onPress={()=>{navigation.navigate('SelectLocation')}}>
                  <Text style={{alignSelf:'center',color:'white'}}>At my current location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'90%',margin:5,borderRadius:30,marginTop:20,alignSelf:'center'}}
            onPress={()=>{navigation.navigate('SelectLocation')}}>
                  <Text style={{alignSelf:'center',color:'black'}}>I'll enter my location manually</Text>
            </TouchableOpacity>
         </View>
    </LinearGradient>
  )
}

export default Location
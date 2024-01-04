import { View, Text,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'

const Booking = () => {
    const navigation=useNavigation()
  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
    <View style={{alignSelf:'center',alignItems:'center',marginTop:50,}}>
              <Image
                   source={require('../assets/booking.png')}
                   style={{width:300,height:280,borderRadius:5,alignSelf:'center'}}
                   
                 />
                 <Text style={{margin:20}}>Booking Success</Text>
                 <Text style={{color:'white',alignSelf:'center'}}>Thank you for your booking! our representative will contact you shortly </Text>

    </View>
    <View style={{marginTop:20,}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'90%',alignSelf:'center',margin:5,borderRadius:5,marginTop:20}}
            onPress={()=>navigation.navigate('Profile')}>
                  <Text style={{alignSelf:'center',color:'black'}}>Okay</Text>
            </TouchableOpacity>
         </View>
    </LinearGradient>
  )
}

export default Booking
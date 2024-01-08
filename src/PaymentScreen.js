import { View, Text,ScrollView,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Entypo from 'react-native-vector-icons/Entypo'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { useNavigation } from '@react-navigation/native'



const PaymentScreen = () => {
  const navigation=useNavigation()
  return (
    <LinearGradient  colors={['#D70303', '#2405DF']} style={{flex:1}}>
    <ScrollView>
     <View style={{backgroundColor:'white',height:100,flexDirection:'row',borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
         <View>
             <Image
               source={require('../assets/rozarpay.png')}
               style={{height:50,width:50,marginLeft:50,margin:20}}
             />
          </View>
          <View style={{marginTop:20}}>
            <Text style={{fontSize:20,color:'black'}}>Razor pay</Text>
            <Text style={{color:'black'}}>5,000</Text>
          </View>
     </View>
        <Text style={{color:'white',margin:20,fontSize:18}}>Choose your Payment Method</Text>
    <View style={{flexDirection:'row',alignSelf:'center',borderWidth:1,borderColor:'white',borderRadius:10,padding:10,width:'80%'}}>
      <View>
      <Ionicons
      onPress={()=>navigation.navigate()}
      name='card-outline'
      size={30}
      color={'white'}
      style={{margin:10,backgroundColor:'black',padding:10,borderRadius:5,borderWidth:0.5,borderColor:'white',marginLeft:20}}
      />
      <Text style={{color:'white',alignSelf:'center',fontSize:10,marginLeft:20}}>pay with card</Text>
      </View>
      <View>
       <Entypo
      onPress={()=>navigation.navigate()}
      name='network'
      size={30}
      color={'white'}
      style={{margin:10,backgroundColor:'black',padding:10,borderRadius:5,borderWidth:0.5,borderColor:'white',marginLeft:30}}
      />
       <Text style={{color:'white',alignSelf:'center',fontSize:10,marginLeft:20}}>Net Banking</Text>
      </View>
      <View>
      <Fontisto
      onPress={()=>navigation.navigate()}
      name='wallet'
      size={30}
      color={'white'}
      style={{margin:10,backgroundColor:'black',padding:10,borderRadius:5,borderWidth:0.5,borderColor:'white',marginLeft:30}}
      />
       <Text style={{color:'white',alignSelf:'center',fontSize:10,marginLeft:20}}>Wallet</Text>
      </View>
    </View>
    <Text style={{color:'white',margin:20,fontSize:18}}>Pay With UPI</Text>
    <View>
      <View style={{flexDirection:'row'}}>
         <Image
               source={require('../assets/gpay.png')}
               style={{height:50,width:50,marginLeft:50,margin:20,backgroundColor:'white'}}
             />
             <Text style={{color:'white',alignSelf:'center'}}>Google Pay</Text>
        </View>
        <View style={{flexDirection:'row'}}>
             <Image
               source={require('../assets/phonepay.png')}
               style={{height:50,width:50,marginLeft:50,margin:20}}
             />
              <Text style={{color:'white',alignSelf:'center'}}>Phone Pay</Text>
          </View>
          <View style={{flexDirection:'row'}}>
            <Image
               source={require('../assets/paytm.jpg')}
               style={{height:50,width:80,marginLeft:50,margin:20}}
             />
              <Text style={{color:'white',alignSelf:'center'}}>Paytm</Text>
             </View> 
             <View style={{flexDirection:'row'}}>
    <SimpleLineIcons
      onPress={()=>navigation.navigate()}
      name='control-forward'
      size={30}
      color={'black'}
      style={{backgroundColor:'white',padding:10,margin:20,width:50,marginLeft:50}}
      />
     <Text style={{color:'white',alignSelf:'center'}}>Other</Text>
      </View>
    </View>

    <View style={{marginTop:20,marginBottom:20}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'80%',margin:5,borderRadius:5,marginTop:20,alignSelf:'center',}}
            onPress={()=>{}}>
                  <Text style={{alignSelf:'center',color:'black'}}>Next</Text>
            </TouchableOpacity>
         </View>
    </ScrollView>
    </LinearGradient>
  )
}

export default PaymentScreen
import { View, Text,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Profile = () => {
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
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Profile</Text>
      </View>

     <View style={{flexDirection:'row',margin:20,}}> 
              <Image
                   source={require('../assets/profile.png')}
                   style={{width:50,height:50,borderRadius:5,alignSelf:'center'}}
                   
                 />
         <Text style={{alignSelf:'center',marginLeft:20}}>Venkatesh</Text>
    </View>
    <View style={{margin:20}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <FontAwesome
    //   onPress={()=>navigation.goBack()}
      name='bell'
      size={35}
      color={'black'}
    //   style={{backgroundColor:'white',borderRadius:25}}
      />
      <Text style={{marginLeft:20,color:'white',alignSelf:'center',}}>Notifications</Text>
        </View>
          <View>
          <MaterialIcons
    //   onPress={()=>navigation.goBack()}
           name='keyboard-arrow-right'
           size={35}
           color={'black'}
    //   style={{backgroundColor:'white',borderRadius:25}}
      />
          </View>
        </View>
        <View style={{backgroundColor:'white',height:1,marginTop:10}}/>
        <Text style={{margin:10,color:'black'}}>ABOUT</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <FontAwesome
    //   onPress={()=>navigation.goBack()}
      name='bell'
      size={35}
      color={'black'}
    //   style={{backgroundColor:'white',borderRadius:25}}
      />
      <Text style={{marginLeft:20,color:'white',alignSelf:'center',}}>Privacy Policy</Text>
        </View>
          <View>
          <MaterialIcons
    //   onPress={()=>navigation.goBack()}
           name='keyboard-arrow-right'
           size={35}
           color={'black'}
    //   style={{backgroundColor:'white',borderRadius:25}}
      />
          </View>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <View style={{flexDirection:'row'}}>
        <FontAwesome
    //   onPress={()=>navigation.goBack()}
      name='bell'
      size={35}
      color={'black'}
    //   style={{backgroundColor:'white',borderRadius:25}}
      />
      <Text style={{marginLeft:20,color:'white',alignSelf:'center',}}>Terms of Use</Text>
        </View>
          <View>
          <MaterialIcons
    //   onPress={()=>navigation.goBack()}
           name='keyboard-arrow-right'
           size={35}
           color={'black'}
    //   style={{backgroundColor:'white',borderRadius:25}}
      />
          </View>
        </View>
        <View style={{backgroundColor:'white',height:1,marginTop:10}}/>
    </View>
    </LinearGradient>
  )
}

export default Profile
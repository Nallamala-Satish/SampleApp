import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,ImageBackground,TouchableOpacity } from 'react-native';

const SignUp = () => {

    const navigation = useNavigation()

  return (
   
    <ImageBackground
    source={require('../assets/SignUpImage.png')}
    style={{width:'100%',height:'100%',alignSelf:'center',flex:1}}>
    <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'black',opacity:0.8}}>
      <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>LOGO</Text>

      <TouchableOpacity style={{backgroundColor:'white',borderRadius:5,padding:10,width:100,margin:10,marginTop:70}} onPress={()=>{navigation.navigate('SignIn')}}>
        <Text style={{alignSelf:'center',color:'black'}}>SIGN UP</Text>
      </TouchableOpacity>
     <View style={{flexDirection:'row',margin:20}}>
      <View style={{backgroundColor:'white',height:1,width:'40%',alignSelf:'center'}}/>
    <Text style={{padding:10,color:'white'}}>OR</Text>
    <View style={{backgroundColor:'white',height:1,width:'40%',alignSelf:'center'}}/>
    </View>

    <TouchableOpacity style={{backgroundColor:'white',borderRadius:5,padding:10,width:100,margin:10}} onPress={()=>{navigation.navigate('SignIn')}}>
        <Text style={{alignSelf:'center',color:'black',}}>SIGN IN</Text>
      </TouchableOpacity>

    </View>
    </ImageBackground>
   
  );
}

export default SignUp;

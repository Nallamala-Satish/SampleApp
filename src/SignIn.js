import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text,ImageBackground,Image,ScrollView,TextInput,TouchableOpacity } from 'react-native';

const SignIn = () => {
    const navigation=useNavigation()
const [name,setName]=useState('')
const[password,setPassword]=useState('')

  return (
    <ScrollView>
    <View style={{flex:1}}>
    <ImageBackground
    source={require('../assets/SignInImage.png')}
    style={{width:'100%',height:350,alignSelf:'center',}}>
            <Image
                   source={require('../assets/SignInlogo.png')}
                   style={{width:200,height:200,alignSelf:'center',marginTop:50}}
                   
                 />
    </ImageBackground>
    
        <View>
     
     <Text style={{color:'black',marginLeft:30,marginLeft:50,fontSize:15,marginTop:20}}>User Name</Text>  
     <TextInput
      placeholder=" "
      value={name}
      onChangeText={text => setName(text)}
      style={{width:'80%',marginLeft:20,borderBottomWidth:1,borderColor:'black',alignSelf:'center',height:40}}
    />
      <Text style={{color:'black',marginLeft:30,marginLeft:50,fontSize:15,marginTop:20}}>Password</Text>  
     <TextInput
      placeholder=" "
      value={password}
      onChangeText={text => setPassword(text)}
      style={{width:'80%',marginLeft:20,borderBottomWidth:1,borderColor:'black',alignSelf:'center',height:40}}
    />

     <TouchableOpacity style={{backgroundColor:'#D87355',borderRadius:5,padding:10,width:100,margin:10,marginTop:50,alignSelf:'center',}} onPress={()=>{navigation.navigate('PhoneNumberScreen')}}>
        <Text style={{alignSelf:'center',color:'white'}}>Sign In</Text>
      </TouchableOpacity>
      <Text style={{alignSelf:'center',color:'black',margin:5}}>OR</Text>
      <Text style={{alignSelf:'center',color:'black',color:'#D87355',marginBottom:50}}>Forgot Password ?</Text>
        </View>
    </View>
    </ScrollView>
  );
}

export default SignIn;

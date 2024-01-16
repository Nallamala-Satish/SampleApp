import React,{useState,useRef} from 'react';
import { View, Text,ImageBackground,Image,ScrollView,TouchableOpacity,StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpPage = () => {
 const[otp,setOtp]=useState('')

  return (
    <ScrollView>
    <View style={{flex:1}}>
    <ImageBackground
    source={require('../assets/phoneNumberImage.png')}
    style={{width:'100%',height:350,alignSelf:'center',}}>
            <Image
                   source={require('../assets/passwordImage.png')}
                   style={{width:100,height:100,alignSelf:'center',marginTop:100}}
                   
                 />
    </ImageBackground>
    <View style={{alignSelf:'center',marginTop:50}}>
      <OTPInputView
    style={{width: '90%', height: 100,alignSelf:'center',padding:10,}}
    pinCount={4}
    code={otp} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
     onCodeChanged = {code => { setOtp(code)}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
   />
     </View>
     <TouchableOpacity style={{padding:10,backgroundColor:'black',width:'30%',margin:5,borderRadius:5,marginTop:20,alignSelf:'center'}}
            onPress={()=>{navigation.navigate('MyBookings')}}>
        <Text style={{alignSelf:'center',color:'white'}}>Continue</Text>
       </TouchableOpacity>
    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
    
  underlineStyleBase: {
    width: 60,
    height: 60,
    // borderWidth: 1,
    borderRadius:50,
    backgroundColor:'white',
    color:'black',
    fontWeight:'bold',
    // padding:30,
    alignSelf:'center',
  },


})
export default OtpPage;

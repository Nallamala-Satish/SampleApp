import React,{useState} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'

const OtpScreen = () => {
    const[otp,setOtp]=useState('')

  return (
    <View style={{backgroundColor:'orange'}}>
      <Text>Otp screen</Text>
      <View style={{alignSelf:'center',}}>
      <OTPInputView
    style={{width: '80%', height: 200,alignSelf:'center',}}
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
    </View>
  );
}
const styles = StyleSheet.create({
    
      underlineStyleBase: {
        width: 50,
        height: 50,
        // borderWidth: 1,
        backgroundColor:'white',
        color:'black',
        fontWeight:'bold'
      },
    
    
    })
export default OtpScreen;

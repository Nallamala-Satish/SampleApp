import React,{useState} from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import AntDesign from 'react-native-vector-icons/AntDesign'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const OtpScreen = () => {
    const[otp,setOtp]=useState('')
    const navigation=useNavigation()

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
      </View>
    <View style={{alignSelf:'center',}}>
      <Text style={{fontWeight:'bold',fontSize:25,color:'black',alignSelf:'center',marginTop:50}}>Enter Your OTP</Text>
      <Text style={{color:'white',alignSelf:'center',margin:10,width:250}}>We have send you the four digit code to your mobile number</Text>
      <View style={{alignSelf:'center',}}>
      <OTPInputView
    style={{width: '80%', height: 100,alignSelf:'center',}}
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
     <View style={{marginTop:30,}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'90%',margin:5,borderRadius:25,marginTop:20,alignSelf:'center'}}
            onPress={()=>{navigation.navigate('MyBookings')}}>
                  <Text style={{alignSelf:'center',color:'#53BF41'}}>Continue</Text>
            </TouchableOpacity>
            <Text style={{color:'white',margin:20,alignSelf:'center'}}>Dont Recieve Code ? <Text style={{color:'black',fontWeight:'bold'}}> Resend</Text> </Text>
         </View> 
     </View>
    </LinearGradient>
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

import { useNavigation } from '@react-navigation/native';
import React,{useState,useRef} from 'react';
import { View, Text,ImageBackground,Image,ScrollView,TextInput,TouchableOpacity,StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';

const PhoneNumberScreen = () => {
  const navigation=useNavigation()
  const[mobileNumber,setMobileNumber]=useState('')
  const phoneInput = useRef(null);

  return (
    <ScrollView>
    <View style={{flex:1}}>
    <ImageBackground
    source={require('../assets/phoneNumberImage.png')}
    style={{width:'100%',height:350,alignSelf:'center',}}>
            <Image
                   source={require('../assets/phoneNumberLogo.png')}
                   style={{width:200,height:130,alignSelf:'center',marginTop:100}}
                   
                 />
    </ImageBackground>
      <Text style={{fontWeight:'bold',fontSize:22,color:'black',marginLeft:20}}>VerifyPhoneNumber</Text>
      <Text style={{marginLeft:20,margin:10}}>Enter Your phoneNumber</Text>

      <PhoneInput
            containerStyle={styles.phoneNumberView}
            textContainerStyle={{ paddingVertical: 0,borderRadius: 0,  }}
            ref={phoneInput}
            defaultValue={mobileNumber}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
                setMobileNumber( text)
            }}
            // withDarkTheme
            // withShadow
            autoFocus
          />

    <TouchableOpacity style={{backgroundColor:'#D87355',borderRadius:5,padding:10,width:100,margin:10,marginTop:50,alignSelf:'center',}} onPress={()=>{navigation.navigate('OtpPage')}}>
        <Text style={{alignSelf:'center',color:'white'}}>Next</Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({

  phoneNumberView: {
      width: '80%',
      height: (50),
      // backgroundColor: 'white',
      alignSelf:'center',
      // borderColor: '#dadee3',
      // borderWidth: 1,
      // borderRadius: 30,
      marginTop:10
    },
  });

export default PhoneNumberScreen;

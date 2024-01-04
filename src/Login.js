import React,{useState,useRef} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import PhoneInput from 'react-native-phone-number-input';


const Login = () => {

    const[mobileNumber,setMobileNumber]=useState('')
    const phoneInput = useRef(null);

  return (
    <View>
      <Text>Login</Text>
      <PhoneInput
            containerStyle={styles.phoneNumberView}
            textContainerStyle={{ paddingVertical: 0,borderRadius: 30,  }}
            ref={phoneInput}
            defaultValue={mobileNumber}
            defaultCode="IN"
            layout="first"
            onChangeText={(text) => {
                setMobileNumber( text)
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
    </View>
  );
}
const styles = StyleSheet.create({

phoneNumberView: {
    width: '80%',
    height: (60),
    backgroundColor: 'white',
    alignSelf:'center',
    borderColor: '#dadee3',
    borderWidth: 1,
    borderRadius: 30,
    marginTop:10
  },

})
export default Login;

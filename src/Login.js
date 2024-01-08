import { useNavigation } from '@react-navigation/native';
import React,{useState,useRef} from 'react';
import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PhoneInput from 'react-native-phone-number-input';
import AntDesign from 'react-native-vector-icons/AntDesign'
import SwitchButton from "switch-button-react-native";

const Login = () => {
  const navigation=useNavigation()
  const [activeButton, setActiveButton] = useState(1);
    const[mobileNumber,setMobileNumber]=useState('')
    const phoneInput = useRef(null);

    const handleButtonPress = (buttonNumber) => {
      setActiveButton(buttonNumber);
    };

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
    <View style={{alignSelf:'center'}}>
      <Text style={{fontWeight:'bold',color:'white',fontSize:25,margin:10,alignSelf:'center'}}>LOGO</Text>
      <Text style={{color:'white',margin:10,alignSelf:'center'}}>Your Home Services Expert</Text>
      <View style={{flexDirection:'row',marginTop:10}}>
        <Text style={{color:'white',alignSelf:'center'}}>Login As </Text>

        {/* <View style={{flexDirection:'row',borderWidth:1,borderColor:'white',borderRadius:30,marginLeft:10}}>
         
          <TouchableOpacity  style={[styles.button, activeButton === 1 && styles.activeButton]} 
           onPress={()=>{
            handleButtonPress(1)
           }}>
             <Text style={{alignSelf:'center',color:'black'}}>Worker</Text>
          </TouchableOpacity>
         
          <TouchableOpacity  style={[styles.button, activeButton === 2 && styles.activeButton]}
          onPress={()=>{
             handleButtonPress(2)
            }}>
             <Text style={{alignSelf:'center',color:'black'}}>User</Text>
          </TouchableOpacity>
        
        </View> */}
         <View style={{marginLeft:10}}>
        <SwitchButton
        onValueChange={(val) => {console.log(val)}} // this is necessary for this component
        text1="Worker" // optional: first text in switch button --- default ON
        text2="User" // optional: second text in switch button --- default OFF
        switchWidth={200} // optional: switch width --- default 44
        switchHeight={50} // optional: switch height --- default 100
        switchdirection="rtl" // optional: switch button direction ( ltr and rtl ) --- default ltr
        switchBorderRadius={100} // optional: switch border radius --- default oval
        switchSpeedChange={500} // optional: button change speed --- default 100
        switchBorderColor="#d4d4d4" // optional: switch border color --- default #d4d4d4
        switchBackgroundColor=" " // optional: switch background color --- default #fff
        btnBorderColor="orange" // optional: button border color --- default #00a4b9
        btnBackgroundColor="orange" // optional: button background color --- default #00bcd4
        fontColor="black" // optional: text font color --- default #b1b1b1
        activeFontColor="#fff" // optional: active font color --- default #fff
      />
         </View>

      </View>
      </View>
      <View>
        <Text style={{color:'black',fontWeight:'bold',fontSize:25,margin:20}}>Verify Phone Number</Text>
        <Text style={{color:'white',marginLeft:30}}>Enter Your Phone Number</Text>      
      
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
            <View style={{marginTop:30,}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'#363438',width:'90%',margin:5,borderRadius:25,marginTop:20,alignSelf:'center'}}
            onPress={()=>{navigation.navigate('OtpScreen')}}>
                  <Text style={{alignSelf:'center',color:'white'}}>Next</Text>
            </TouchableOpacity>
         </View> 
    </View>
    </LinearGradient>
  );
}
const styles = StyleSheet.create({

phoneNumberView: {
    width: '90%',
    height: (60),
    backgroundColor: 'white',
    alignSelf:'center',
    borderColor: '#dadee3',
    borderWidth: 1,
    borderRadius: 30,
    marginTop:10
  },
  button: {
    padding: 10,
    borderRadius: 30,
    borderColor: 'black',
    width:100
  },
  activeButton: {
    backgroundColor: 'white',
  },


})
export default Login;

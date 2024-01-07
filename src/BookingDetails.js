import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text,Image,TouchableOpacity,TextInput,ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
// import { TextInput } from 'react-native-paper';

const BookingDetails = () => {
  const [name,setName]=useState('')
  const [address,setAddress]=useState('')
  const [booking,setBooking]=useState('')
  const [date,setdate]=useState('')
  const navigation=useNavigation()

  return (
    <LinearGradient  colors={['#D70303', '#2405DF']} style={{flex:1}}>
    <View style={{flexDirection:'row',margin:20,}}> 
<AntDesign
//   onPress={()=>navigation.goBack()}
name='leftcircle'
size={35}
color={'black'}
style={{backgroundColor:'white',borderRadius:25}}
/>
<Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:50}}>Booking ID 2095</Text>
</View>
  <ScrollView>
    <View>
                <Image
                   source={require('../assets/profile2.png')}
                   style={{width:70,height:70,borderRadius:5,alignSelf:'center'}}
                   
                 />
    </View>
    <View style={{marginTop:50}}>
    <Text style={{color:'white',marginLeft:40,fontSize:15}}>Customer Name</Text>  
    <TextInput
      placeholder="Enter Name"
      value={name}
      onChangeText={text => setName(text)}
      style={{width:'85%',marginLeft:20,borderBottomWidth:1,borderColor:'white',alignSelf:'center'}}
    />
    <Text style={{color:'white',marginLeft:30,marginLeft:40,fontSize:15,marginTop:20}}>Address</Text>  
    <TextInput
      placeholder="Enter Address"
      value={address}
      onChangeText={text => setAddress(text)}
      style={{width:'85%',marginLeft:20,borderBottomWidth:1,borderColor:'white',alignSelf:'center'}}
    />
    <Text style={{color:'white',marginLeft:30,marginLeft:40,fontSize:15,marginTop:20}}>Booking For</Text>  
    <TextInput
      placeholder="Enter Booking For"
      value={booking}
      onChangeText={text => setBooking(text)}
      style={{width:'85%',marginLeft:20,borderBottomWidth:1,borderColor:'white',alignSelf:'center'}}
    />
     <Text style={{color:'white',marginLeft:30,marginLeft:40,fontSize:15,marginTop:20}}>Date & Time</Text>  
    <TextInput
      placeholder="Enter Date & Time"
      value={date}
      onChangeText={text => setdate(text)}
      style={{width:'85%',marginLeft:20,borderBottomWidth:1,borderColor:'white',alignSelf:'center'}}
    />
    </View>
    <View style={{marginTop:50,marginBottom:20}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'85%',margin:5,borderRadius:5,marginTop:20,alignSelf:'center'}}
            onPress={()=>navigation.navigate('BookingScreen')}>
                  <Text style={{alignSelf:'center',color:'black'}}>Marks as complete</Text>
            </TouchableOpacity>
         </View>
     </ScrollView>
     </LinearGradient>
  );
}

export default BookingDetails;

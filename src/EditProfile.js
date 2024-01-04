import { View, Text,Image,TextInput,ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import LinearGradient from 'react-native-linear-gradient'
import AntDesign from 'react-native-vector-icons/AntDesign'



const EditProfile = () => {
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [phone,setPhone]=useState('')

  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
      <View style={{backgroundColor:'white',height:150,borderBottomRightRadius:200,borderBottomLeftRadius:200}}>
    <View style={{flexDirection:'row',margin:20,}}> 
      <AntDesign
//   onPress={()=>navigation.goBack()}
      name='leftcircle'
     size={35}
     color={'black'}
     style={{backgroundColor:'white',borderRadius:25}}
     />
    <Text style={{color:'black',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Edit Profile</Text>
    </View>
    <View style={{marginTop:30}}>
             <Image
                   source={require('../assets/profile.png')}
                   style={{width:80,height:80,borderRadius:5,alignSelf:'center'}}
                   
                 />
    </View>
      </View>
         <ScrollView>                        
        <View style={{alignSelf:'center',marginTop:40,width:'90%'}}>
             <View style={{}}>
              <Text style={{marginLeft:30,color:'black'}}>Full Name</Text>
              <TextInput
              placeholder=" Enter Name"
               value={name}
               onChangeText={(text)=>setName(text)}
               style={{borderWidth:1,borderRadius:30,borderColor:'white',margin:10,padding:15,}}
               />
              </View>
              <View style={{}}>
              <Text style={{marginLeft:30,color:'black'}}>E-Mail</Text>
              <TextInput
              placeholder=" Enter E-Mail"
               value={email}
               onChangeText={(text)=>setEmail(text)}
               style={{borderWidth:1,borderRadius:30,borderColor:'white',margin:10,padding:15}}
               />
              </View>
              <View style={{}}>
              <Text style={{marginLeft:30,color:'black'}}>Phone Number</Text>
              <TextInput
              placeholder=" Enter Phone Number"
               value={phone}
               onChangeText={(text)=>setPhone(text)}
               style={{borderWidth:1,borderRadius:30,borderColor:'white',margin:10,padding:15}}
               />
              </View>
              <View style={{marginTop:30,}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'95%',margin:5,borderRadius:25,marginTop:20}}
            onPress={()=>{}}>
                  <Text style={{alignSelf:'center',color:'black'}}>Update Now</Text>
            </TouchableOpacity>
         </View>                   
         </View>
         </ScrollView> 
    </LinearGradient>
  )
}

export default EditProfile
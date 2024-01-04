import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text,ScrollView,Image,TouchableOpacity,ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
const WorkerDetails = () => {
const navigation=useNavigation()

  return (
   
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
         <ScrollView >
         
        <View style={{margin:3,marginTop:0,}}>
          <View>
             <ImageBackground
                   source={require('../assets/image7.png')}
                   style={{width:'98%',height:350,borderRadius:5,alignSelf:'center'}}>
        <View style={{flexDirection:'row',margin:15,justifyContent:'space-between',}}> 
      <AntDesign
      onPress={()=>navigation.goBack()}
      name='leftcircle'
      size={50}
      color={'black'}
      style={{backgroundColor:'white',borderRadius:60,}}
      />
      <View style={{flexDirection:'row',}}>
       <Ionicons
      onPress={()=>{}}
      name='chatbox-ellipses-outline'
      size={30}
      color={'white'}
      style={{backgroundColor:'black',borderRadius:50,padding:10}}
      />
       <Ionicons
      onPress={()=>{}}
      name='heart-circle'
      size={50}
      color={'black'}
      style={{backgroundColor:'white',borderRadius:60,marginLeft:10}}
      />
      </View>
      </View>
             </ImageBackground>
          </View>
          <View style={{padding:10,}}>
            <Text style={{fontSize:20,color:'black',}}>Nikitha Andreson</Text>
            <Text style={{padding:5,color:'#5C5B5B',fontSize:20}}>Cleaner</Text>
            <View style={{alignSelf:'center',}}>
      <Text style={{color:'#FFF',fontSize:15}}>simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
      standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Text>
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,}}>
            <View>
                <Text style={{alignSelf:'center',color:'black'}}>{'Jobs'}</Text>
                <Text style={{alignSelf:'center',color:'white'}}>{'2'}</Text>
            </View> 
            <View>
                <Text style={{alignSelf:'center',color:'black'}}>{'Rate'}</Text>
                <Text style={{alignSelf:'center',color:'white'}}>{'300/hr'}</Text>
            </View> 
            </View>
      
          </View>
         <View>
            <Text style={{fontSize:20,color:'white',marginLeft:20}}>What does this serviceinclude ?</Text>
            <View style={{flexDirection:'row',marginLeft:10}}>
            <Image
                   source={require('../assets/image8.png')}
                   style={{width:120,height:100,borderRadius:5,alignSelf:'center',margin:5}}
                   
                 />
                 <View style={{marginLeft:20,alignSelf:'center'}}>
                    <Text style={{color:'black',fontSize:20,margin:5}}>Deep Cleaning</Text>
                    <Text style={{color:'white',fontSize:15,margin:5}}>{`Intensive cleaning for 3-4 \nhours of the entire house`}</Text>
                 </View>
            </View>
         </View>
         <View style={{marginBottom:20}}>
            <TouchableOpacity style={{padding:10,backgroundColor:'white',width:'95%',margin:5,borderRadius:5,marginTop:20}}
            onPress={()=>{navigation.navigate('Sechudle')}}>
                  <Text style={{alignSelf:'center',color:'black'}}>Book Now</Text>
            </TouchableOpacity>
         </View>
    </View>
    </ScrollView >
    </LinearGradient>
   
  );
}

export default WorkerDetails;

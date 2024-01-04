

import { View, Text,Image,FlatList, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Card, Searchbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
const Home = () => {
const [search,setSearch]=useState()
const navigation = useNavigation()
  const data=[
    {id:1,image:require('./assets/image1.png'),title:'Bathroom Cleaning'},
    {id:2,image:require('./assets/image2.png'),title:'MensHairCut'},
    {id:3,image:require('./assets/image3.png'),title:'painting'},
    {id:4,image:require('./assets/image4.png'),title:'Plunber'},
    {id:5,image:require('./assets/image5.png'),title:'Electrician'},
    {id:6,image:require('./assets/image6.png'),title:'Beautician'}
  ]

const Item = ({item})=>{
  return(
    <View style={{padding:10}}>
        <TouchableOpacity onPress={()=>{navigation.navigate('List')}}>
         <Image
               source={item.image}
               style={{width:150,height:150,borderRadius:5}}
               
             />
        <Text style={{color:'white',alignSelf:'center'}}>{item.title}</Text>  
        </TouchableOpacity>   
    </View>
  )
}
  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
      <View style={{padding:15,backgroundColor:'white',borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',}}>
          <View>
             <Text>Begumpet</Text>
             <Text style={{fontSize:10}}>Hyderabad - Telangana 500016</Text>
          </View>
          <View>
             <Image
               source={require('./assets/profile.png')}
               style={{}}
             />
          </View>
          </View>
          <View style={{marginTop:10,marginBottom:10}}>
          <Searchbar
      placeholder="Search"
      onChangeText={text => setSearch(text)}
      value={search}
      style={{borderRadius:5,backgroundColor:'white',borderWidth:1,borderColor:'black',height:50}}
    />
    </View>
      </View>
   <View style={{marginTop:10,flexDirection:'row',justifyContent:'space-between',padding:10}}>
    <Text style={{color:'white',fontSize:20,}}>
      Select Service
    </Text>
    <Text style={{fontSize:10}}>See All</Text>
    </View>
    <ScrollView>
    <View style={{alignSelf:'center',marginBottom:40}}>
      <FlatList
      numColumns={2}
      data={data}
      renderItem={Item}
      keyExtractor={item =>item.id}
      />
    </View>
    </ScrollView>
  </LinearGradient>
  )
}

export default Home
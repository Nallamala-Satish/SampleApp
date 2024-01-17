import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text,FlatList,Image, TouchableOpacity,ScrollView } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomePage = () => {
    const [search,setSearch]=useState()
    const[selectItem,setSelectItem]=useState('')
    console.log(selectItem)
const navigation = useNavigation()
  const data=[
    {id:1,image:require('../assets/home1.png'),title:'Blouse'},
    {id:2,image:require('../assets/home2.png'),title:'Kurti'},
    {id:4,image:require('../assets/home4.png'),title:'Fancy Dress'},
    {id:3,image:require('../assets/home3.png'),title:'Saree'},
    {id:5,image:require('../assets/home5.png'),title:'Dance Dress'},
    {id:6,image:require('../assets/home6.png'),title:'Blazer'}
  ]
  const data1=[
    {id:1,image:require('../assets/user1.png'),title:'Men'},
    {id:2,image:require('../assets/user2.png'),title:'Women'},
  ]

  const data2=[
    {id:1,image:require('../assets/home11.png'),title:'Kurta'},
    {id:2,image:require('../assets/home12.png'),title:'Dhoti'},
    {id:3,image:require('../assets/home13.png'),title:'Blazer'},
    {id:4,image:require('../assets/home14.png'),title:'Jeans'},
    {id:5,image:require('../assets/home15.png'),title:'Shirts'},
    {id:6,image:require('../assets/home16.png'),title:'Sherwani'}
  ]

  const Item =( {item}) =>{
    return(
        <View style={{padding:10}} >
            <TouchableOpacity onPress={()=>{setSelectItem(item.title)}}>
            <Image
               source={item.image}
               style={{alignSelf:'center'}}
             />
             <Text style={{fontSize:10,alignSelf:'center'}}>{item.title}</Text>
             </TouchableOpacity>
        </View>
    )
  }
  const Item1 =( {item}) =>{
    return(
        <View style={{padding:10}}>
            <Image
               source={item.image}
               style={{alignSelf:'center',width:150,height:200,borderRadius:10}}
             />
             <Text style={{alignSelf:'center',color:'black'}}>{item.title}</Text>
        </View>
    )
  }

  return (
    <View>
       <View style={{padding:20,backgroundColor:'#03779E',borderBottomRightRadius:10,borderBottomLeftRadius:10,}}>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>

             <Image
               source={require('../assets/Vector.png')}
               style={{alignSelf:'center'}}
             />

     <Searchbar
      placeholder=""
      onChangeText={text => setSearch(text)}
      value={search}
      inputStyle={{alignSelf:'center',height:30,}}
      style={{borderRadius:30,backgroundColor:'white',width:250,height:30,alignSelf:'center'}}
    />

   <FontAwesome
    //   onPress={()=>navigation.navigate('')}
      name='bell'
      size={15}
      color={'white'}
      style={{alignSelf:'center'}}
      />
    </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <FlatList
        horizontal
        data={data1}
        renderItem={Item}
        keyExtractor={item =>item.id}
        />
        <TouchableOpacity style={{alignSelf:'center',marginRight:30}} onPress={()=>{}}>
        <Text style={{alignSelf:'center',}}>see all</Text>
        </TouchableOpacity>
        
      </View>
    <ScrollView>
      <View style={{marginBottom:150}}>
      <FlatList
        numColumns={2}
        data={selectItem == 'Men' ? data2 : data}
        renderItem={Item1}
        keyExtractor={item =>item.id}
        />
      </View>
      </ScrollView>
    </View>

  );
}

export default HomePage;

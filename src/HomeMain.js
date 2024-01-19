import { useNavigation } from '@react-navigation/native';
import React,{useState} from 'react';
import { View, Text,FlatList,Image, TouchableOpacity,ScrollView } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const HomeMain = () => {
    const [search,setSearch]=useState()
    // const[selectItem,setSelectItem]=useState('')
    // console.log(selectItem)
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
    {id:1,image:require('../assets/main1.png'),title:'Saree'},
    {id:2,image:require('../assets/main2.png'),title:'fabric'},
    {id:3,image:require('../assets/main3.png'),title:'formals'},
    {id:4,image:require('../assets/main4.png'),title:'casuals'},
    {id:5,image:require('../assets/main5.png'),title:'Party'},
  ]

  const Item =( {item}) =>{
    return(
        <View style={{padding:10}} >
            <TouchableOpacity onPress={()=>{}}>
            <Image
               source={item.image}
               style={{alignSelf:'center',width:50,height:50,}}
             />
             <Text style={{fontSize:10,alignSelf:'center',color:'white',padding:10}}>{item.title}</Text>
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
   <View style={{flex:1}}>
       <View style={{padding:20,backgroundColor:'#183F79',}}>
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
      <View style={{backgroundColor:'#183F79',}}>
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data1}
        renderItem={Item}
        keyExtractor={item =>item.id}
        />
        
      </View>
      <View style={{flexDirection:'row',margin:10,justifyContent:'space-between',}}>
          <View style={{width:150}}>
            <Text style={{color:'black',alignSelf:'center',fontWeight:'bold'}}>Fashion Made Easy</Text>
             <Text style={{fontSize:10,alignSelf:'center',padding:5}}>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </Text>
               <TouchableOpacity>
                <Text style={{color:'#183F79',alignSelf:'center'}}>Start Now</Text>
               </TouchableOpacity>
          </View>
          <View>
          <Image
               source={require('../assets/main6.png')}
               style={{alignSelf:'center',width:170,height:100,borderRadius:10}}
             />
          </View>
      </View>
    <ScrollView>
      <View style={{marginBottom:30,flex:1,alignSelf:'center'}}>
      <FlatList
        numColumns={2}
        data={data}
        renderItem={Item1}
        keyExtractor={item =>item.id}
        />
      </View>
      </ScrollView>
    </View>
  );
}

export default HomeMain;

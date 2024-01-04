import { View, Text, ScrollView, FlatList,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Card } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const List = () => {
 const navigation=useNavigation()

    const data=[
        {id:1,image:require('./assets/card1.png'),title:'Full Home Cleaning'},
        {id:2,image:require('./assets/card2.png'),title:'Car Cleaning'},
        {id:3,image:require('./assets/card3.png'),title:'Bathroom Cleaning'},
        {id:4,image:require('./assets/card4.png'),title:'Kitchen Cleaning'},
        {id:5,image:require('./assets/card5.png'),title:'Carpet Cleaning'},
        {id:6,image:require('./assets/card6.png'),title:'Sofa Cleaning'},
        {id:7,image:require('./assets/card7.png'),title:'Home Disifection'},
      ]
    
    const Item = ({item})=>{
      return(
        <View style={{padding:10,}}>
            <Card style={{padding:5}}>
                <View style={{flexDirection:'row',}}>
             <Image
                   source={item.image}
                   style={{width:60,height:60,borderRadius:5}}
                   
                 />
            <Text style={{alignSelf:'center',fontSize:15,marginLeft:50,color:'black'}}>{item.title}</Text>  
            </View>
            </Card>   
        </View>
      )
    }
  return (
    <LinearGradient  colors={['orange', 'green']} style={{flex:1}}>
      <View style={{flexDirection:'row',margin:20,}}> 
        <AntDesign
        onPress={()=>navigation.goBack()}
        name='leftcircle'
        size={35}
        color={'black'}
        style={{backgroundColor:'white',borderRadius:25}}
        />
        <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Professional Cleaning Services</Text>
        </View>
        <ScrollView>
        <View style={{alignSelf:'center',marginBottom:40,width:'95%'}}>
      <FlatList
      data={data}
      renderItem={Item}
      keyExtractor={item =>item.id}
      />
    </View>
        </ScrollView>


   </LinearGradient>
  )
}

export default List
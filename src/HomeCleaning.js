import { View, Text, ScrollView, FlatList,Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { Card } from 'react-native-paper'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'

const HomeCleaning = () => {
    const navigation=useNavigation()

    const data=[
        {id:1,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
        {id:2,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
        {id:3,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
        {id:4,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
        {id:5,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
        {id:6,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
        {id:7,image:require('../assets/card8.png'),title:'Nikitha Andreson'},
      ]
    
    const Item = ({item})=>{
      return(
        <View style={{padding:10,}}>
            <Card style={{padding:5}} onPress={()=>navigation.navigate('WorkerDetails')}>
                <View style={{flexDirection:'row',}}>
             <Image
                   source={item.image}
                   style={{width:70,height:70,borderRadius:5,alignSelf:'center'}}
                   
                 />
                 <View>
            <Text style={{alignSelf:'center',fontSize:15,marginLeft:50,color:'black'}}>{item.title}</Text>  
            <Text style={{alignSelf:'center',fontSize:15,}}>{'Cleaner'}</Text> 
            <View style={{flexDirection:'row',justifyContent:'space-between',marginLeft:50,marginTop:10}}>
            <View>
                <Text style={{alignSelf:'center'}}>{'Jobs'}</Text>
                <Text style={{alignSelf:'center',color:'black'}}>{'2'}</Text>
            </View> 
            <View>
                <Text style={{alignSelf:'center'}}>{'Rate'}</Text>
                <Text style={{alignSelf:'center',color:'black'}}>{'300/hr'}</Text>
            </View> 
            </View>
               
            </View>
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
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:10}}>Full Home Cleaning</Text>
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
  );
}

export default HomeCleaning;

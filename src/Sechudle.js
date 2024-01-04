import React,{useState} from 'react';
import { View, Text,ScrollView,FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import {Calendar, LocaleConfig} from 'react-native-calendars';
import { TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

const Sechudle = () => {
    const [selected, setSelected] = useState('');
    const navigation=useNavigation()
    const [selectedItem,setselectedItem]=useState('')
    const[value,setvalues]=useState(false)

    const data=[
        {id:1,value:'09:00'},{id:2,value:'10:00'},{id:3,value:'11:00'},
        {id:4,value:'12:00'},{id:5,value:'01:00'},{id:6,value:'02:00'},
        {id:7,value:'03:00'},{id:8,value:'04:00'},{id:9,value:'05:00'},
        {id:10,value:'06:00'},{id:11,value:'07:00'},{id:12,value:'08:00'},
    ]

    const Item = ({item})=>{
       
        return(
            <View style={{padding:20,backgroundColor:'white',}}>
                <TouchableOpacity style={{backgroundColor:(value == true && selectedItem.id == item.id) ? 'black' :'',borderRadius:5}}
                  onPress={()=>{
                    setvalues(!value)
                    setselectedItem(item)
                    }} >
                <Text style={{color:(value == true && selectedItem.id == item.id) ? 'white' :'',alignSelf:'center',padding:10,}}>{item.value}</Text>
                </TouchableOpacity>
               
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
      <Text style={{color:'white',fontSize:20,fontWeight:'bold',alignSelf:'center',marginLeft:20}}>Select date & time</Text>
      </View>
        <ScrollView >
           <View style={{margin:2,}}>
           <Calendar
                onDayPress={day => {
                setSelected(day.dateString);
                 }}
              markedDates={{
             [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
               }}
               style={{backgroundColor:'orange'}}
               theme={{backgroundColor:'orange ',calendarBackground:'orange',selectedDayBackgroundColor:'black', textSectionTitleColor: 'black',
               selectedDayTextColor: '#ffffff', todayTextColor: 'black',}}
              
          />
           </View>
           <Text style={{color:'black',fontSize:20,margin:10}}>Sechudle</Text>
           <Card style={{backgroundColor:'white',height:320,}}>
           <View style={{alignSelf:'center'}}>
            <FlatList
            data={data}
            numColumns={3}
            renderItem={Item}
            keyExtrator={item =>item.id}
            />
         </View>
         </Card>
         <View style={{marginBottom:30}}>
            <TouchableOpacity style={{padding:15,backgroundColor:'white',width:'95%',margin:5,borderRadius:5,marginTop:20}}
            onPress={()=>{}}>
                  <Text style={{alignSelf:'center',color:'black'}}>Continue</Text>
            </TouchableOpacity>
         </View>
        </ScrollView>
    
    </LinearGradient>

  );
}

export default Sechudle;

import { View, Text,ScrollView,TuchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const PaymentScreen = () => {
  return (
    <LinearGradient  colors={['#D70303', '#2405DF']} style={{flex:1}}>
    <ScrollView>
    <View>
      <Text>PaymentScreen</Text>
    </View>
    </ScrollView>
    </LinearGradient>
  )
}

export default PaymentScreen
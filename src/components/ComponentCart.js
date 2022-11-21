import { View, Text, Button } from 'react-native'
import React from 'react'

const ComponentCart = ({navigation}) => {
  return (
    <View>
      <Text>ComponentCart</Text>
      <Button title=' next ' onPress={() => navigation.navigate('ComponentCart')} />

    </View>
  )
}

export default ComponentCart;
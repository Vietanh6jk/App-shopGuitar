import { View, Text, SafeAreaView, StatusBar, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
    //  <Icon name="rocket" color="#eee" size={30} />

const ComponentScreen1 = ({navigation}) => {
  return (
    <SafeAreaView>
        <StatusBar />
      <Text>ComponentScreen1</Text>
      <Button title=' next ' onPress={() => navigation.navigate('ComponentLogin')} />
    </SafeAreaView>
  )
}

export default ComponentScreen1;
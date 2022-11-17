import { View, Text, Button } from 'react-native'
import React from 'react'

const ComponenHome = ({navigation}) => {
    return (
        <View>
            <Text>ComponenHome</Text>
            <Button title=' next ' onPress={() => navigation.navigate('ComponentDetail')} />

        </View>
    )
}

export default ComponenHome;
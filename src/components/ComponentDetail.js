import { View, Text, Button } from 'react-native'
import React from 'react'

const ComponentDetail = ({ route, navigation }) => {
    console.log("🚀 ~ file: ComponentDetail.js ~ line 5 ~ ComponentDetail ~ route", route)
    let { item } = route.params;
    console.log("🚀 ~ file: ComponentDetail.js ~ line 7 ~ ComponentDetail ~ item", item)

    return (
        <View>
            <Text>ComponentDetail</Text>
            <Button title=' next ' onPress={() => navigation.navigate('ComponentCart')} />

        </View>
    )
}

export default ComponentDetail;
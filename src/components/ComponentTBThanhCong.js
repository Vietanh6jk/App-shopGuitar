import { View, Text, Button, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';

const ComponentTBThanhCong = ({ navigation }) => {
    return (
        <View style={[styles.flex_1, {
            backgroundColor: color.color_bg,
            padding: 20,
        }]} >
            <StatusBar />
            {/*  */}
           


            {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentTBThanhCong')} /> */}

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentTBThanhCong;
import { View, Text, SafeAreaView, StatusBar, Button, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from '../themes/styles'
import color from '../themes/color'
//  <Icon name="rocket" color="#eee" size={30} />

const ComponentScreen1 = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.flex_1, {}]}>
            <StatusBar />
            <ImageBackground style={[styles.flex_1, {}]} source={require("../images/bg_screen1.png")} >
                <View style={[styles.flex_4, styles.viewCenterTop, {}]}   >
                    <Text style={[, {
                        marginTop: 50,
                        fontSize: 50,
                        textAlign: 'center',
                        color: color.white,
                        fontWeight: 'bold',
                        marginHorizontal: 50,
                    }]} >Discover your own guitar</Text>
                </View>
                <View style={[styles.flex_1, styles.viewCenter, {
                }]}   >
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ComponentLogin')}
                        style={[, {
                            backgroundColor: color.white,
                            opacity: 0.6,
                            padding: 15,
                            width: 280,
                            alignItems: 'center',
                            borderRadius: 10,
                        }]}  >
                        <Text style={[, { fontWeight: 'bold', fontSize: 18, }]} >Login</Text>
                    </TouchableOpacity >
                    <Text style={[, {
                        marginTop: 15,
                        opacity: 0.7,
                        color: '#fff',
                    }]} >Create new account</Text>
                </View>


                {/* <Text>ComponentScreen1</Text> */}
                {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentLogin')} /> */}
            </ImageBackground>
        </SafeAreaView>
    )
}
//             style={[  ,{}]}                //


export default ComponentScreen1;
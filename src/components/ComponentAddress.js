import { View, Text, Button, StatusBar, TouchableOpacity, TextInput, Image } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';

const ComponentAddress = ({ navigation }) => {
    return (
        <View style={[styles.flex_1, {
            backgroundColor: color.color_bg,
            padding: 20,
        }]} >
            <StatusBar />
            {/*  */}
            <View style={[styles.row, { marginTop: 5, alignItems: 'center', marginBottom: 10, }]} >
                <TouchableOpacity onPress={() => { navigation.navigate('ComponenHome') }}>
                    <IconFontAwesome style={[, { padding: 5, paddingHorizontal: 12, backgroundColor: '#fff', borderRadius: 20, }]} name='angle-left' size={22} color={'#000'} />
                </TouchableOpacity>
                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: '500' }]} >Address</Text>
            </View>

            {/*  */}
            <View style={[styles.flex_1, {
                marginTop: 20,
                marginHorizontal: 10,
            }]}  >
                <View  >
                    <Text style={[, { fontWeight: '600' }]}  >Name</Text>
                    <TextInput style={[, { paddingHorizontal: 10, padding: 5, borderBottomWidth: 1, borderColor: '#878787' }]} placeholder='Jimmy Colin' />
                </View>
                <View style={[, {marginTop: 20,}]} >
                    <Text style={[, { fontWeight: '600' }]}  >Phone</Text>
                    <TextInput style={[, { paddingHorizontal: 10, padding: 5, borderBottomWidth: 1, borderColor: '#878787' }]} placeholder='+62 812-9892-5673' />
                </View>
                <View style={[, {marginTop: 20,}]} >
                    <Text style={[, { fontWeight: '600' }]}  >Address</Text>
                    <TextInput style={[, { paddingHorizontal: 10, padding: 5, borderBottomWidth: 1, borderColor: '#878787' }]} placeholder='Hill Street 10' />
                </View>

                <Image  style={[  ,{width: 300, height: 200, borderRadius:10,marginTop: 30,}]}   source={require('../images/img_scr7_map.png')}  />

            </View>

            

            {/*  */}
            <TouchableOpacity style={[, { alignItems: 'center', marginVertical: 10, marginBottom: 20, }]} onPress={() => navigation.navigate('ComponentTBThanhCong')} >
                <Text style={[, {
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 10,
                    width: '80%',
                    borderRadius: 10,
                }]} >Shipping</Text>
            </TouchableOpacity>


            {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentTBThanhCong')} /> */}

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentAddress;
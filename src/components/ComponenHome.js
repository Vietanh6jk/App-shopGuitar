import { View, Text, Button, StatusBar, TextInput, Image } from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles'
import color from '../themes/color'

const ComponenHome = ({ navigation }) => {

    
    return (
        <View style={[styles.flex_1, {
            backgroundColor: color.color_bg,
            padding: 20,
        }]}>
            <StatusBar />
            {/*  */}
            <View style={[styles.row, {
                marginTop: 10,
                alignItems: 'center',
            }]}  >
                <View style={[styles.row, styles.flex_1, {
                    alignItems: 'center',
                    backgroundColor: '#f9f9f9',
                    borderRadius: 12,
                }]}  >
                    <IconFontAwesome style={[, { padding: 8, paddingHorizontal: 10, margin: 5, backgroundColor: '#fff', borderRadius: 20 }]} name='search' size={20} color='#000' />
                    <TextInput style={[styles.flex_1, { padding: 10, fontSize: 15, }]} placeholder='Search your guitar' />
                </View>
                <IconMaterialCommunityIcons style={[, {
                    marginLeft: 18,
                    padding: 8, backgroundColor: '#fff',
                    borderRadius: 20,
                }]} name='cart-variant' size={22} color='#000' />
                <View style={[, {
                    padding: 5,
                    backgroundColor: '#f00',
                    borderRadius: 5,

                    position: 'absolute',
                    top: 7,
                    right: 2,
                }]}  >

                </View>
            </View>
            {/*  */}

            <View style={[, {
                // backgroundColor:'#0ff',
                marginTop: 20,
            }]} >
                <View style={[styles.row, {
                    justifyContent: 'space-between',
                    marginVertical: 5
                }]} >
                    <Text style={[, { fontSize: 16, fontWeight: 'bold', }]} >Out Product</Text>
                    <Text style={[, { fontSize: 12, color: color.color_main, }]} >See All</Text>
                </View>

                {/* Chưa xong - them flatList */}
                <View style={[styles.row, {
                    alignItems: 'center',
                    marginTop: 12,
                }]} >
                    <Text style={[styles.listProduct, styles.listProduct1, {}]} >All</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >Electric guitar</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >Acoustic guitar</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >Guitar classic</Text>
                    <Text style={[styles.listProduct, styles.listProduct0, {}]} >All</Text>
                </View>
            </View>

            {/* list item */}

            <View>
                <View>
                    <Image  style={[  ,{width: 150, height: 150,}]}  source={{uri:'https://guitar.station.vn/wp-content/uploads/2015/11/HD-300-Top-vertical-Copy-2-500x500.jpg'}} />
                </View>
            </View>




            {/* <Text>ComponenHome</Text>
            <Button title=' next ' onPress={() => navigation.navigate('ComponentDetail')} /> */}

        </View>
    )
}
///                       style={[  ,{}]}               ///

export default ComponenHome;
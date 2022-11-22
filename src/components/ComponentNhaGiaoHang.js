import { View, Text, Button, StatusBar, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';

const ComponentNhaGiaoHang = ({ navigation }) => {

    const [numCheck, setNumCheck] = useState(1);

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
                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: '500' }]} >Shipping</Text>
            </View>
            {/*  */}
            <View style={[styles.flex_1, { marginTop: 20, }]}  >
                <TouchableOpacity style={[styles.row, {
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                    onPress={() => setNumCheck(1)}
                >
                    <Image style={[, { width: 85, height: 85, borderRadius: 10, }]} source={require('../images/img_scr6_1.png')} />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginBottom: 8,
                        }]}   >JNE Express</Text>
                        <Text style={[, { fontSize: 13, opacity: 0.6, }]}  >Arrived in 3-4 Days</Text>
                    </View>
                    <IconMaterialCommunityIcons style={[, { marginRight: 10, }]} name={numCheck === 1 ? 'check-circle-outline' : 'checkbox-blank-circle-outline'} size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 2 */}
                <TouchableOpacity style={[styles.row, {
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                    onPress={() => setNumCheck(2)}
                >
                    <Image style={[, { width: 85, height: 85, borderRadius: 10, }]} source={require('../images/img_scr6_2.png')} />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginBottom: 8,
                        }]}   >DHL Express</Text>
                        <Text style={[, { fontSize: 13, opacity: 0.6, }]}  >Arrived in 3-4 Days</Text>
                    </View>
                    <IconMaterialCommunityIcons style={[, { marginRight: 10, }]} name={numCheck === 2 ? 'check-circle-outline' : 'checkbox-blank-circle-outline'} size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 3  */}
                <TouchableOpacity style={[styles.row, {
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                    onPress={() => setNumCheck(3)}
                >
                    <Image style={[, { width: 85, height: 85, borderRadius: 10, }]} source={require('../images/img_scr6_3.png')} />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginBottom: 8,
                        }]}   >FedEx</Text>
                        <Text style={[, { fontSize: 13, opacity: 0.6, }]}  >Arrived in 3-4 Days</Text>
                    </View>
                    <IconMaterialCommunityIcons style={[, { marginRight: 10, }]} name={numCheck === 3 ? 'check-circle-outline' : 'checkbox-blank-circle-outline'} size={25} color={'#000'} />
                </TouchableOpacity>

                {/* 4 */}
                <TouchableOpacity style={[styles.row, {
                    backgroundColor: '#fff',
                    borderRadius: 10,
                    alignItems: 'center',
                    marginBottom: 10,
                }]}
                    onPress={() => setNumCheck(4)}
                >
                    <Image style={[, { width: 85, height: 85, borderRadius: 10, }]} source={require('../images/img_scr6_4.png')} />
                    <View style={[styles.flex_1, {
                        marginLeft: 10,
                    }]}  >
                        <Text style={[, {
                            fontWeight: 'bold',
                            marginBottom: 8,
                        }]}   >SAP Express</Text>
                        <Text style={[, { fontSize: 13, opacity: 0.6, }]}  >Arrived in 3-4 Days</Text>
                    </View>
                    <IconMaterialCommunityIcons style={[, { marginRight: 10, }]} name={numCheck === 4 ? 'check-circle-outline' : 'checkbox-blank-circle-outline'} size={25} color={'#000'} />
                </TouchableOpacity>

            </View>

            {/*  */}
            <TouchableOpacity style={[, { alignItems: 'center', marginVertical: 10, marginBottom: 20, }]} onPress={() => navigation.navigate('ComponentAddress')} >
                <Text style={[, {
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 10,
                    width: '80%',
                    borderRadius: 10,
                }]} >Continue</Text>
            </TouchableOpacity>




            {/* <Button title=' next ' onPress={() => navigation.navigate('ComponentAddress')} /> */}

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentNhaGiaoHang;
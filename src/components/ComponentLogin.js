import { View, Text, Button, SafeAreaView, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'



import styles from '../themes/styles';
import color from '../themes/color';



const ComponentLogin = ({ navigation }) => {

    //
    const [btnEye, setBtnEye] = useState(1)  // btn mắt ở pass  1: đóng || 0: mở

    const [chbRemember, setChbRemember] = useState(0) // check box Remember 0: null || 1 :check

    //
    const [txtUserName, setTxtUserName] = useState('admin');
    const [txtPass, setTxtPass] = useState('123456');
    //
    const callLogin = () => {
        if (txtUserName === 'admin' || txtUserName === 'Admin') {
            if (txtPass === '123456') {
                setTxtPass('');
                setTxtUserName('');
                navigation.navigate('ComponenHome');
            }
            else {
                alert('Password sai!!!');
            }
        }
        else {
            alert('Username không tồn tại!');
        }
    }
    return (
        <SafeAreaView style={[styles.flex_1, {
            backgroundColor: color.gray
        }]}>
            <StatusBar />
            {/* header  */}
            <View style={[styles.flex_2, {
                // backgroundColor: '#0f0',
                justifyContent: 'flex-end',
                padding: 20,
                paddingHorizontal: 30

            }]}  >
                <Text style={[, { marginVertical: 10, fontWeight: 'bold', fontSize: 27 }]} >Welcome back!</Text>
                <Text style={[, { opacity: 0.7, marginBottom: 15 }]} >Please login to access and start shopping</Text>
            </View>
            {/* center */}
            <View style={[styles.flex_4, {
                // backgroundColor: '#ff0',
                padding: 20,
                paddingHorizontal: 30,
            }]}  >
                <Text style={[, { fontSize: 16 }]}>Username</Text>
                <TextInput
                    value={txtUserName}
                    onChangeText={text => setTxtUserName(text)}
                    style={[, { padding: 5, paddingHorizontal: 10, borderBottomWidth: 0.5, }]}
                    placeholder='AVan@gamil.com' />
                <Text style={[, { marginTop: 20, fontSize: 16 }]}>Password</Text>
                <View style={[styles.row, { alignItems: 'center', borderBottomWidth: 0.5 }]}  >
                    <TextInput
                        value={txtPass}
                        onChangeText={text => setTxtPass(text)}
                        secureTextEntry={btnEye ? true : false}
                        style={[styles.flex_1, { padding: 5, paddingHorizontal: 10 }]} />
                    {/* <IconIonicons name="md-eye-off-outline" color="#000" size={30} /> */}
                    <TouchableOpacity onPress={() => btnEye ? setBtnEye(0) : setBtnEye(1)} >
                        <IconIonicons style={[, { padding: 5, marginLeft: 20 }]} name={btnEye ? 'md-eye-off-outline' : 'ios-eye-outline'} color="#000" size={25} />
                    </TouchableOpacity>
                </View>

                <View style={[styles.row, { alignItems: 'center', marginTop: 20, }]} >
                    <TouchableOpacity onPress={() => chbRemember ? setChbRemember(0) : setChbRemember(1)}>
                        <IconMaterialCommunityIcons name={chbRemember ? 'checkbox-outline' : 'checkbox-blank-outline'} size={25} color='#8d8d8d' />
                    </TouchableOpacity>
                    <Text style={[styles.flex_1, { color: color.black2 }]} >Remember me</Text>
                    <Text style={[, { color: '#00f' }]} >Forgot password?</Text>
                </View>
            </View>
            {/* footer */}
            <View style={[styles.flex_5, {
                // backgroundColor: '#0ff',
                paddingHorizontal: 30,
            }]}  >
                <TouchableOpacity
                    onPress={() => callLogin()}
                    style={[, {
                        backgroundColor: color.black,
                        alignItems: 'center',
                        padding: 15,
                        borderRadius: 10,
                    }]}  >
                    <Text style={[, {
                        color: color.white,
                        fontWeight: 'bold',
                        fontSize: 18,
                    }]} >Login</Text>
                </TouchableOpacity>

                <View style={[styles.viewCenterTop, { marginTop: 30, borderBottomWidth: 0.6, borderColor: color.black2 }]} >
                    <Text style={[, { paddingHorizontal: 10, padding: 5, marginBottom: -15, fontSize: 15, backgroundColor: color.gray, color: color.black2 }]} >Or</Text>
                </View>

                <View style={[styles.row, {
                    marginTop: 45,
                    justifyContent: 'space-between',
                }]} >
                    <TouchableOpacity style={[styles.row, { alignItems: 'center', backgroundColor: '#fff', padding: 5, paddingRight: 15 }]} >
                        <IconFontAwesome style={[, { padding: 5, paddingHorizontal: 10, }]} name='facebook' size={25} color='#00f' />
                        <Text style={[, { fontSize: 16, fontWeight: 'bold', color: '#00F' }]} >Facebook</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.row, { alignItems: 'center', backgroundColor: '#fff', padding: 5, paddingHorizontal: 10, paddingRight: 15 }]} >
                        <IconFontAwesome style={[, { padding: 5, paddingHorizontal: 10, }]} name='google' size={25} color='#f00' />
                        <Text style={[, { fontSize: 16, fontWeight: 'bold', color: '#00F' }]} >Google</Text>
                    </TouchableOpacity>
                </View>

                <View style={[styles.viewCenterTop, styles.row, {
                    marginTop: 35,
                    justifyContent: 'center'
                }]} >
                    <Text style={[, { color: color.black2 }]}  >Don`t have an account? </Text>
                    <Text style={[, { color: '#00f' }]} > Sign up</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}
//           style={[  ,{}]}                  //

export default ComponentLogin;
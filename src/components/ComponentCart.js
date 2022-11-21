import { View, Text, Button, StatusBar, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';
import data from '../database/data';
import xuly from '../config/xuly';

const ComponentCart = ({ navigation }) => {

    //
    let { z_item, listItem } = data;


    //
    const [listCart, setListCart] = useState([])

    useEffect(() => {
        let db = []
        let item1 = Math.floor(Math.random() * listItem.length) + 1;
        let item3 = Math.floor(Math.random() * listItem.length) + 1;
        let item2 = Math.floor(Math.random() * listItem.length) + 1;
        if (item1 === item2) {
            if (item1 === item3) {
                listItem.forEach(val => {
                    if (val.id === item1) {
                        db.push(val)
                    }
                });
            } else {
                listItem.forEach(val => {
                    if (val.id === item1 || val.id === item3) {
                        db.push(val)
                    }
                });
            }
        } else if (item1 === item3) {
            listItem.forEach(val => {
                if (val.id === item1 || val.id === item2) {
                    db.push(val)
                }
            });
        }
        else {
            listItem.forEach(val => {
                if (val.id === item1 || val.id === item2 || val.id === item3) {
                    db.push(val)
                }
            });
        }
        
        

        setListCart(db);
    }, [])


    
    // sum price item
    let sumPrice = 0;
    listCart.forEach(val => {
        sumPrice += (val.price - (val.price * val.sale) / 100) ;
    })
    
    /**
     * render item view cart
     */
    const renderItem = ({ item }) => {

        let str_price = xuly.setPriceString(Math.floor(item.price - (item.price * item.sale) / 100));

        return (
            <View style={[styles.row, {
                backgroundColor: '#fff',
                padding: 10,
                marginBottom: 15,
                borderRadius: 10,
            }]}   >
                <Image style={[, { width: 120, height: 150, }]} source={{ uri: item.img }} />
                <View style={[styles.flex_1, { marginLeft: 5 }]}   >
                    <Text style={[, { fontWeight: '600', fontSize: 16, }]}   >{item.name}</Text>
                    <Text style={[, { opacity: 0.6 }]}  >Electric</Text>
                    <Text style={[, { opacity: 0.6 }]}  >Discount: {item.sale} %</Text>
                    <View style={[, { paddingTop: 2, backgroundColor: '#7d7d7d', marginVertical: 15, }]}  ></View>
                    <View style={[styles.row, { alignItems: 'center' }]}  >
                        <IconMaterialIcons style={[, {}]} name='add-circle-outline' size={22} color={'#000'} />
                        <Text style={[, { paddingHorizontal: 5, }]}> 1 </Text>
                        <IconFeather style={[, {}]} name='minus-circle' size={22} color={'#000'} />
                        <Text style={[styles.flex_1, {
                            textAlign: 'center',
                            color: color.color_main,
                        }]}>${str_price}</Text>
                    </View>
                </View>


            </View>
        )
    }

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
                <Text style={[styles.flex_1, { textAlign: 'center', fontWeight: '500' }]} >Cart</Text>
            </View>

            {/*  */}
            <View style={[styles.flex_1, {}]} >
                {/* <View style={[styles.row, {
                    backgroundColor: '#fff',
                    padding: 10,
                }]}   >
                    <Image style={[, { width: 120, height: 150, }]} source={{ uri: z_item.img }} />
                    <View style={[styles.flex_1, { marginLeft: 5 }]}   >
                        <Text style={[, { fontWeight: '600', fontSize: 16, }]}   >{z_item.name}</Text>
                        <Text style={[, { opacity: 0.6 }]}  >Electric</Text>
                        <Text style={[, { opacity: 0.6 }]}  >Discount: {z_item.sale} %</Text>
                        <View style={[, { paddingTop: 2, backgroundColor: '#7d7d7d', marginVertical: 15, }]}  ></View>
                        <View style={[styles.row, { alignItems: 'center' }]}  >
                            <IconMaterialIcons style={[, {}]} name='add-circle-outline' size={22} color={'#000'} />
                            <Text style={[, { paddingHorizontal: 5, }]}> 1 </Text>
                            <IconFeather style={[, {}]} name='minus-circle' size={22} color={'#000'} />
                            <Text style={[styles.flex_1, {
                                textAlign: 'center',
                                color: color.color_main,
                            }]}>${z_item.price}</Text>
                        </View>
                    </View>


                </View> */}

                <FlatList
                    data={listCart}
                    keyExtractor={item => item.id}
                    renderItem={renderItem}
                />
            </View>


            {/*  */}
            <View>
                <View style={[, { paddingTop: 1, backgroundColor: '#000', marginVertical: 5, }]} ></View>
                <View  style={[ styles.row ,{justifyContent:'space-between', marginHorizontal: 20,marginVertical: 8,}]}  >
                    <Text  style={[  ,{fontWeight: 'bold', fontSize:  16,}]}  >Total: </Text>
                    <Text  style={[  ,{fontWeight: 'bold', color:color.color_main}]}  >{xuly.setPriceString(Math.floor(sumPrice))} $</Text>
                </View>
            </View>
            {/*  */}
            <TouchableOpacity style={[, { alignItems: 'center', marginVertical: 10, marginBottom: 20, }]} onPress={() => navigation.navigate('ComponentNhaGiaoHang')} >
                <Text style={[, {
                    backgroundColor: '#000',
                    color: '#fff',
                    textAlign: 'center',
                    padding: 10,
                    width: '80%',
                    borderRadius: 10,
                }]} >Shipping</Text>
            </TouchableOpacity>

        </View>
    )
}
///                        style={[  ,{}]}              ///

export default ComponentCart;
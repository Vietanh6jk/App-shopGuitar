import { View, Text, Button, StatusBar, TouchableOpacity ,Image, StyleSheet} from 'react-native'
import React from 'react'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import styles from '../themes/styles';
import color from '../themes/color';

const ComponentTBThanhCong = ({ navigation }) => {
    const BacktoHomeHandler = ()  => {
        navigation.navigate('ComponenHome'); //Chuyển về Home
    }
    const PackageStatusHandler = () =>{
        navigation.navigate('ComponentCart'); //Chuyển về cart
    }
    return (
        <View style={[styles.flex_1, {
            backgroundColor: color.color_bg,
            padding: 20,
            justifyContent:'center',alignItems:'center',
        }]} >
            <Text style={{fontWeight:'700',fontSize:18,top:-100}} >
                Successful
            </Text>
            <Image style={{width:300,height:300,top:-80}} source={require("../images/img_sucress.png")}/>
            <Text style={{fontWeight:'700',fontSize:18,top:-60}}>Successful order</Text>
            <Text  style={{top:-50,opacity:0.3,width:280,textAlign:'center'}}>You have sucessfully order guitar,you can shop again or you see your shipping</Text>
            <TouchableOpacity style={
                {top:60,width:320,height:50,backgroundColor:'black',borderRadius:15,justifyContent:'center',alignItems:'center'}}
                onPress={() => BacktoHomeHandler()}>
                <Text style={{fontWeight:"500",fontSize:15,color:'white'}}>Back to home</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={{top:80,width:320,height:50,backgroundColor:'white',borderRadius:15,justifyContent:'center',alignItems:'center'}}
            onPress={() => PackageStatusHandler()}>
                 <Text style={{fontWeight:"500",fontSize:15}} >Package status</Text> 
            </TouchableOpacity>
        </View>
    )
   
};



export default ComponentTBThanhCong;
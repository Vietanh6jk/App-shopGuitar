import { StyleSheet } from "react-native";

export default StyleSheet.create({
    flex_1:{
        flex:1,
    },
    flex_2:{
        flex:2,
    },
    flex_3:{
        flex:3,
    },
    flex_4:{
        flex:4,
    },
    flex_5:{
        flex:5,
    },
    row:{
        flexDirection:"row",
    },
    column:{
        flexDirection:"column",
    },
    viewCenter: {
        justifyContent:"center",
        alignItems:'center',
    },
    viewCenterTop:{
        alignItems:"center",
    },

    // 
    listProduct:{
        padding: 8, 
        paddingHorizontal: 12,
        borderRadius:  10, 
        marginRight: 15,
        borderWidth:1,
    },
    listProduct1:{
        backgroundColor:'#000',
        color:'#fff',
        borderColor:'#eee',
    },
    listProduct0:{
        backgroundColor:'#f9f9f9',
        color:'#000',
        borderColor:'#000',
        opacity: 0.6,
    },
    menuClick:{
        position:"absolute",
        bottom:0,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
        backgroundColor:'#fff',
        padding:2,
        paddingHorizontal:5,
    },
    color_white:{
        color:'white'
    }

    
})

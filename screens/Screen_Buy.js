import React from "react";
import { StyleSheet, View, Text} from "react-native";

const Screen_Buy = ({navigation}) =>{
    return(
        <View style = {styles.container}>
            <Text style ={styles.text}>CỦA BẠN HẾT 1 TỶ</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        fontSize: 30,
        fontWeight:'bold',
        color:'white'
    }
});
export default Screen_Buy;
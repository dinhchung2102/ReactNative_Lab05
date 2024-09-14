import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Screen_02 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            
            <View style={styles.header}>
                <Image
                    source={require('../assets/vs_blue.png')}
                    style={styles.imageStyle}
                />
                
                <View style={styles.textView}>
                    <Text style={styles.text}>Điện thoại VsMart Joy 3</Text>
                    <Text style={styles.text}>Hàng Chính Hãng</Text>
                </View>
            </View>
            
            <View style={styles.content}>
                <Text style={styles.text}>Chọn một màu bên dưới:</Text>
                
                <View style={styles.pickColor}>
                    <TouchableOpacity onPress={() => {navigation.navigate('Screen_03')}}>
                        <View style={{ backgroundColor: 'silver', height: 100, width: 100, marginBottom: 30, marginTop: 10 }} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {navigation.navigate('Screen_04')}}>
                        <View style={{ backgroundColor: 'red', height: 100, width: 100, marginBottom: 30 }} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {navigation.navigate('Screen_05')}}>
                        <View style={{ backgroundColor: 'black', height: 100, width: 100, marginBottom: 30 }} />
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => {navigation.navigate('Screen_01')}}>
                        <View style={{ backgroundColor: 'blue', height: 100, width: 100, marginBottom: 10 }} />
                    </TouchableOpacity>
                </View>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>XONG</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
    },
    header: {
        flex: 1,
        // backgroundColor: 'green',
        flexDirection: 'row'
    },
    content: {
        flex: 3,
        backgroundColor: 'grey'
    },
    imageStyle: {
        marginLeft: '5%',
        marginTop: '10%',
        height: 120,
        width: 100
    },
    textView: {
        flexDirection: 'column',
        marginTop: '10%',
        marginLeft: 15
    },
    text: {
        color: 'black',
        fontSize: 18
    },
    pickColor: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    button: {
        width: '90%',
        backgroundColor: 'blue',
        marginLeft: '5%',
        borderRadius: 10,
        height: '8%',
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white'
    }
});

export default Screen_02;

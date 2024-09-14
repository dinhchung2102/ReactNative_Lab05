import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
const Screen_01 = ({navigation}) =>{
    //const sourceImage = require('../assets/vs_blue.png')
    const sourceStar = require('../assets/star.png')
    return(
        <View style= {styles.container}>
            <Image
                source={require('../assets/vs_blue.png')}
                style = {styles.imageStyle}
            />
            <Text style ={styles.headerText}>Điện thoại Vsmart Joy 3 - Hàng chính hãng</Text>
            <View style = {styles.rateStyle}>
                <View style ={styles.starStyle}>
                    <Image
                        source={sourceStar}
                    />
                    <Image
                        source={sourceStar}
                    />
                    <Image
                        source={sourceStar}
                    />
                    <Image
                        source={sourceStar}
                    />
                    <Image
                        source={sourceStar}
                    />
                </View>
                <TouchableOpacity>
                    <Text>
                        (Xem 828 đánh giá)
                    </Text>
                </TouchableOpacity>
            </View>
            <View style ={styles.priceStyle}>
                <Text style ={styles.priceText}>1.790.000 đ</Text>
                <Text style ={styles.priceDiscount}>1.790.000 đ</Text>
            </View>
            <View style = {styles.linkStyle}>
                <Text style ={styles.textLink}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                <Image
                    source={require('../assets/icon.png')}
                />
            </View>
            <TouchableOpacity style ={styles.choiceStyle}
                onPress={() => {navigation.navigate('Screen_02')}}
            >
                <Text style ={styles.textChoice}>4 MÀU - CHỌN MÀU</Text>
                <Image
                    source={require('../assets/Vector.png')}
                />
            </TouchableOpacity>
            <TouchableOpacity style ={styles.button}
                onPress={() => {navigation.navigate('Screen_Buy')}}
            >
                <Text style ={styles.textButton}>
                    CHỌN MUA
                </Text>
            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: 'center',
        //backgroundColor: 'red',
    },
    imageStyle:{
        marginTop: '10%',
        width: '90%',
        marginLeft:'5%'
    },
    headerText:{
        fontSize: 18,
        width:'90%',
        marginLeft: '5%'
    },
    rateStyle:{
        flexDirection: 'row',
        width:' 90%',
        marginTop: 20,
        alignItems:'center',
        marginLeft: '5%'
    },
    starStyle:{
        flexDirection:'row',
        marginRight: 20
    },
    priceStyle:{
        flexDirection: 'row',
        marginLeft: '5%',
        marginTop: 20
    },
    priceText:{
        fontWeight:'bold',
        fontSize: 20
    },
    priceDiscount:{
        fontSize: 17,
        color: 'grey',
        textDecorationLine: 'line-through',
        marginLeft: 22
    },
    linkStyle:{
        flexDirection:'row',
        marginLeft:'5%',
        marginTop: 15
    },
    textLink:{
        color:'red',
        fontWeight:'bold',
        marginRight: 10
    },
    choiceStyle:{
        width:'90%',
        marginLeft: '5%',
        marginTop: 15,
        height: 40,
        borderRadius: 15,
        borderColor: 'grey',
        borderWidth: 1,
        shadowColor:'black',
        alignItems: 'center',
        flexDirection:'row'
    },
    textChoice:{
        fontSize: 18,
        marginLeft:'30%',
        marginRight:'17%'
    },
    button:{
        marginLeft: '5%',
        backgroundColor:'red',
        width: '90%',
        marginTop: '25%',
        height:' 5%',
        borderRadius: 15,
        justifyContent:'center',
        alignItems:'center'
    },
    textButton:{
        fontSize: 22,
        fontWeight: 'bold',
        color:'white'
    }
})

export default Screen_01;
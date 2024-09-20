import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Screen_02 = ({ route, navigation }) => {
  const { itemId, name, image, colorPro, supplier, price } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={image} style={styles.imageStyle} />

        <View style={styles.textView}>
          <Text style={styles.text}>{name}</Text>
          <Text style={styles.text}>Màu: {colorPro}</Text>
          <Text style={styles.text}>Cung cấp bởi: {supplier}</Text>
          <Text style={styles.text}>Giá: {price}đ</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>Chọn một màu bên dưới:</Text>

        <View style={styles.pickColor}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen_03",{
                itemId: '002',
                name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                image: require('../assets/vs_silver.png'),
                colorPro: 'Bạc',
                supplier: 'Tiki Trading',
                price: 1790000,
              });
            }}
          >
            <View
              style={{
                backgroundColor: "#C5F1FB",
                height: 100,
                width: 100,
                marginBottom: 30,
                marginTop: 10,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen_03", {
                itemId: '003',
                name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                image: require('../assets/vs_red.png'),
                colorPro: 'Đỏ',
                supplier: 'Tiki Trading',
                price: 1790000,
              });
            }}
          >
            <View
              style={{
                backgroundColor: "#F30D0D",
                height: 100,
                width: 100,
                marginBottom: 30,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen_03", {
                itemId: '004',
                name: 'Điện Thoại Vsmart Joy 3 Hàng chính hãng',
                image: require('../assets/vs_black.png'),
                colorPro: 'Đen',
                supplier: 'Tiki Trading',
                price: 1790000,
              });
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                height: 100,
                width: 100,
                marginBottom: 30,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Screen_03", {
                itemId: "001",
                name: "Điện Thoại Vsmart Joy 3 Hàng chính hãng",
                image: require("../assets/vs_blue.png"),
                colorPro: "Xanh",
                supplier: "Tiki Trading",
                price: 1790000,
              });
            }}
          >
            <View
              style={{
                backgroundColor: "#234896",
                height: 100,
                width: 100,
                marginBottom: 10,
              }}
            />
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
    flexDirection: "row",
  },
  content: {
    flex: 3,
    backgroundColor: "#C4C4C4",
  },
  imageStyle: {
    marginLeft: "2%",
    marginTop: "10%",
    height: 120 * 1.4,
    width: 100 * 1.4,
  },
  textView: {
    flexDirection: "column",
    marginTop: "10%",
    marginLeft: 15,
    //justifyContent:'space-evenly'
  },
  text: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
  },
  pickColor: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  button: {
    width: "90%",
    backgroundColor: "blue",
    marginLeft: "5%",
    borderRadius: 10,
    height: "8%",
    marginTop: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});

export default Screen_02;

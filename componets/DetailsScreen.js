/** @format */

import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import { View, Text, StyleSheet, Image, SafeAreaView } from "react-native";
import plants from "../data/plants";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

function DetailsScreen({ navigation, route }) {
  const plants = route.params;
  //console.log(plants);

  return (
    <SafeAreaView style={styles.top}>
      <View style={styles.navi}>
        <Icon name="arrow-back" size={25} onPress={() => navigation.goBack()} />
        <Icon name="shopping-cart" size={25} />
      </View>
      <View style={styles.imgcontainer}>
        <Image source={plants.img} style={styles.img} />
      </View>
      <View style={styles.detailscontainer}>
        <View style={styles.title}>
          <View style={styles.line}></View>
          <Text style={{ fontWeight: "bold" }}>Best Choice</Text>
        </View>
        <View style={styles.name}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {plants.name}
          </Text>
          <View style={styles.pricetag}>
            <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
              ${plants.price}
            </Text>
          </View>
        </View>
        <View style={styles.about}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>About</Text>
          <Text
            style={{
              color: "grey",
              fontSize: 16,
              lineHeight: 22,
              marginTop: 10,
            }}
          >
            {plants.about}
          </Text>

          <View style={styles.btns}>
            <View style={styles.addbtn}>
              <Text>-</Text>
            </View>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>1</Text>
            <View style={styles.addbtn}>
              <Text>+</Text>
            </View>
            <View style={styles.buybtn}>
              <Text
                style={{ fontWeight: "bold", fontSize: 18, color: "white" }}
              >
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buybtn: {
    backgroundColor: "green",
    width: 120,
    marginRight: 10,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  addbtn: {
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  btns: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    //justifyContent: "center",
    alignItems: "center",
  },
  name: {
    marginLeft: 20,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  about: {
    marginLeft: 20,
  },
  pricetag: {
    width: 80,
    height: 40,
    backgroundColor: "green",
    borderBottomLeftRadius: 25,
    borderTopLeftRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  detailscontainer: {
    flex: 0.55,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 10,
    marginBottom: 10,
    borderRadius: 20,
    marginTop: 30,
    paddingTop: 30,
  },
  title: {
    marginLeft: 20,
    flexDirection: "row",
    alignItems: "flex-end",
  },
  line: {
    width: 25,
    height: 2,
    backgroundColor: "black",
    marginBottom: 5,
    marginRight: 3,
  },
  img: {
    resizeMode: "contain",
    flex: 1,
  },
  imgcontainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.45,
    marginTop: 20,
  },
  top: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingTop: 20,
  },
  navi: {
    paddingHorizontal: 20,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default DetailsScreen;

/** @format */

import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  SafeAreaView,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import plants from "../data/plants";

const { width, height } = Dimensions.get("window");

function HomeScreen(props) {
  const categories = ["Popular", "Organic", "Indoors", "Synthetic"];
  const [categoryIndex, setCategoryIndex] = useState(0);

  const CategoriesList = () => {
    return (
      <View style={styles.categoriescontainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            activeOpacity={0.08}
            key={index}
            onPress={() => setCategoryIndex(index)}
          >
            <Text
              style={[
                styles.categoryText,
                categoryIndex == index && styles.categoryselected,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const Card = ({ plants }) => {
    return (
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.likelogo}>
            <View
              style={[
                {
                  backgroundColor: plants.like
                    ? "rgba(245,42,42,0.2)"
                    : "rgba(0,0,0,0.2)",
                },
                styles.likebutton,
              ]}
            >
              <Icon
                name="favorite"
                size={18}
                color={plants.like ? "red" : "black"}
              />
            </View>
          </View>
          <View style={styles.imgcontainer}>
            <Image source={plants.img} style={styles.img} />
          </View>
          <Text>{plants.name}</Text>
          <View style={styles.price}>
            <Text style={styles.pricetext}>${plants.price}</Text>
            <View style={styles.plusbtn}>
              <Icon name="add" size={20} color="white" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.top}>
      <View style={styles.headersection}>
        <View>
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.subtitle}>Plant Shop</Text>
        </View>
        <Icon name="shopping-cart" size={24} color="black" />
      </View>

      <View style={styles.searchboxarea}>
        <View style={styles.searchbox}>
          <Icon name="search" size={24} color="#00b761" />
          <TextInput placeholder="Search" />
        </View>
        <View style={styles.sortbutton}>
          <Icon name="sort" size={40} color="white" />
        </View>
      </View>

      <CategoriesList />
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 10, paddingBottom: 10 }}
        data={plants}
        renderItem={({ item }) => <Card plants={item} />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
    paddingTop: 70,
  },
  headersection: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#00b761",
  },
  searchboxarea: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchbox: {
    flexDirection: "row",
    marginTop: 20,
    marginHorizontal: 20,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  sortbutton: {
    backgroundColor: "green",
    marginRight: 10,
    height: 50,
    width: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  categoriescontainer: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },
  categoryText: {
    color: "grey",
    fontWeight: "bold",
  },
  categoryselected: {
    color: "green",
    fontWeight: "bold",
    borderBottomWidth: 2,
    paddingBottom: 5,
    borderColor: "green",
  },
  card: {
    height: 225,
    width: width / 2.1,
    backgroundColor: "#f1f1f1",
    marginHorizontal: 2,
    paddingLeft: 15,
    borderRadius: 20,
    margin: 10,
    marginBottom: 20,
    padding: 15,
  },
  likelogo: {
    alignItems: "flex-end",
    paddingRight: 20,
  },
  likebutton: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    resizeMode: "contain",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  imgcontainer: {
    height: 100,
    alignItems: "center",
  },
  price: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    alignItems: "center",
  },
  plusbtn: {
    height: 25,
    width: 20,
    backgroundColor: "green",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  pricetext: {
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default HomeScreen;

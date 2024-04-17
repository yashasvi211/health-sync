import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Prheader from "../../components/Header";
import { Link } from "expo-router";
const Detail = ({ route }) => {
  const specialist = route.params.paramKey;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>Nigga:{specialist}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    elevation: 59,
    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  doctorContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  imageContainer: {
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  specialist: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  touchable: {
    marginHorizontal: 10, // Adjust this value according to your preference
  },
});

export default Detail;

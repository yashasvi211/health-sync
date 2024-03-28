import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ imageUri, header }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.header}>{header}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: 108, // Reduced width
    height: 148, // Reduced height
  },
  image: {
    width: "100%",
    height: 100, // Reduced height
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: "cover",
  },
  content: {
    padding: 8,
  },
  header: {
    fontSize: 14, // Reduced font size
    fontWeight: "bold",
  },
});

export default Card;

import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ imageUri, header, description }) => {
  return (
    <View style={styles.card}>
      <Image source={imageUri} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 0,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginVertical: 8,
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    width: 155, // Adjust the width as needed
    height: 225, // Adjust the height as needed
  },
  image: {
    width: "100%",
    height: 140, // Reduced height for smaller image
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    resizeMode: "cover",
  },
  content: {
    padding: 8, // Reduced padding
  },
  header: {
    fontSize: 16.5, // Reduced font size
    fontWeight: "bold",
    marginBottom: 5, // Reduced margin
  },
  description: {
    fontSize: 11, // Reduced font size
  },
});

export default Card;

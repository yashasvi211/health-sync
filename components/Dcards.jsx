import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const IconHeaderCard = ({ imageUri, header, iconUri }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageUri} style={styles.image} />
        <Text style={styles.text}>{header}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: 140,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 52,
    resizeMode: "cover",
  },
  text: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 12,
  },
});

export default IconHeaderCard;

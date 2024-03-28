import React from "react";
import { View, StyleSheet, Image } from "react-native";

const Banner = ({ imageUri }) => {
  return (
    <View style={styles.banner}>
      <Image source={imageUri} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    flexDirection: "column",
    backgroundColor: "#FFFFF",
    justifyContent: "center",
    marginLeft: 8,
    borderRadius: 10,
    marginRight: 8,
    marginTop: 10,
    height: 220,
    width: 155,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.84,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
});

export default Banner;

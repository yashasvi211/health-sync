import React from "react";
import { View, StyleSheet, Text } from "react-native";

const ListComponent = ({ disease, info }) => {
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.header}>{disease}</Text>
        <Text style={styles.text}>{info}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    display: "flex",
    backgroundColor: "#ffffff", // Background color of the box
    padding: 4, // Padding around the content
    borderRadius: 8, // Border radius to create rounded corners
    borderWidth: 1, // Border width to create border
    borderColor: "#cccccc", // Border color
    width: 110,
    height: 150,
    justifyContent: "",
    elevation: 5,
  },
  header: {
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 13,
  },
  text: {
    fontSize: 12,
  },
});

export default ListComponent;

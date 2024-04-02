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
    padding: 16, // Padding around the content
    borderRadius: 8, // Border radius to create rounded corners
    borderWidth: 1, // Border width to create border
    borderColor: "#cccccc", // Border color
    width: 110,
    height: 110,
    justifyContent: "space-evenly",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
});

export default ListComponent;

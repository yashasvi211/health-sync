import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";

const ListComponet = ({ disease, info }) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.header}>{disease}</Text>
      <Text style={styles.text}>{info}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    height: "30%",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,

    width: "25%", // Remove this line
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default ListComponet;

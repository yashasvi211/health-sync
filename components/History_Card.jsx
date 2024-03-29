import React from "react";
import { View, StyleSheet, Text } from "react-native";

const History_Card = ({ Name, Date, Time, spa }) => {
  return (
    <View style={styles.banner}>
      <Text style={styles.text}>Doctor: {Name}</Text>
      <Text style={styles.text}>Specialist: {spa}</Text>
      <Text style={styles.text}>Date: {Date}</Text>
      <Text style={styles.text}>Time: {Time}</Text>
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default History_Card;

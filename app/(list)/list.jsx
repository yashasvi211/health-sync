import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { Vibration } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListComponet from "../../components/ListComponet";

const App = () => {
  const [pixel, setpixel] = useState(0);

  const incrementCount = () => {
    Vibration.vibrate(50);
    setpixel(pixel + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => alert("Back button pressed")}>
          <Text style={styles.headerText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Your Heading</Text>
      </View>
      <View style={styles.content}>
        <ListComponet />
        <ListComponet />
        <ListComponet />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: "#fff", // background color for header
    borderBottomWidth: 1,
    borderBottomColor: "#ccc", // border color for header bottom
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f0f0f0", // background color for content area
  },
});

export default App;

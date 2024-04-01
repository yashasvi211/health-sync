import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListComponent from "../../components/ListComponet";
import { Link } from "expo-router";

const App = () => {
  const [pixel, setPixel] = useState(0);

  const incrementCount = () => {
    Vibration.vibrate(50);
    setPixel(pixel + 1);
  };
  const TopHeader = () => {
    return (
      <View style={styles.header}>
        <Link href="/home" asChild>
          <TouchableOpacity>
            <Text style={styles.backButton}>Back</Text>
          </TouchableOpacity>
        </Link>
        <Text style={styles.headerText}>Your Heading</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader />
      <View style={styles.content}>
        <ListComponent />
        <ListComponent />
        <ListComponent />
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  backButton: {
    fontSize: 18,
    color: "#007aff",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 16,
  },
});

export default App;

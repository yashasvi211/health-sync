import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";
const Prheader = ({ Name, Add }) => {
  return (
    <View style={styles.header}>
      <Link href={Add} asChild>
        <TouchableOpacity>
          <Text style={styles.backButton}>Back</Text>
        </TouchableOpacity>
      </Link>
      <Text style={styles.headerText}>{Name}</Text>
    </View>
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
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#ffffff",
    justifyContent: "center",
    paddingTop: 12,

    flexWrap: "wrap",
    gap: 15,
    alignItems: "flex-start",
  },
});

export default Prheader;

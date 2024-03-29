import React, { useState } from "react";
import SearchBar from "react-native-elements/dist/searchbar/SearchBar-ios";
import { View, Text, StyleSheet } from "react-native";
import { useUser } from "@clerk/clerk-expo";
const search = () => {
  const [search, setSearch] = useState("");
  const { user } = useUser();
  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        />
      </View>
      <Text style={styles.heading}>Recomendation</Text>
      <Text>{user.firstName}</Text>
    </View>
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
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  view: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    marginTop: 25,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 24,
    elevation: 3,
    shadowColor: "#000",

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default search;

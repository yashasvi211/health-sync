import React from "react";
import { View, Text, StyleSheet } from "react-native";
import History_Card from "../../components/History_Card";
import { ScrollView } from "react-native-gesture-handler";

const History = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>Upcoming Bookings:</Text>
        <History_Card
          Name={"Dr. AP Sharma"}
          spa={"Oncologist"}
          Date={"12/12/12"}
          Time={"12:12"}
        />
        <Text style={styles.heading}>Previous Bookings:</Text>
        <History_Card
          Name={"Dr. AP Sharma"}
          spa={"Oncologist"}
          Date={"12/12/12"}
          Time={"12:12"}
        />
        <History_Card
          Name={"Dr. AP Sharma"}
          spa={"Oncologist"}
          Date={"12/12/12"}
          Time={"12:12"}
        />
        <History_Card
          Name={"Dr. AP Sharma"}
          spa={"Oncologist"}
          Date={"12/12/12"}
          Time={"12:12"}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 16,
    paddingTop: 20,
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
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default History;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Prheader from "../../components/Header";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";

const App = () => {
  const [doctors, setDoctors] = useState([]);

  const firebaseConfig = {
    apiKey: "AIzaSyDOcckDgNR3PETeXuxpQDjfjUi4-3qQnaQ",
    authDomain: "health-sync-cdc19.firebaseapp.com",
    databaseURL: "https://health-sync-cdc19-default-rtdb.firebaseio.com",
    projectId: "health-sync-cdc19",
    storageBucket: "health-sync-cdc19.appspot.com",
    messagingSenderId: "240815674969",
    appId: "1:240815674969:web:b0934364bfe137f6fc4348",
  };

  initializeApp(firebaseConfig);

  const fetchDataFromFirestore = async () => {
    const firestore = getFirestore();
    const doctorsRef = collection(firestore, "doctors");

    onSnapshot(doctorsRef, (querySnapshot) => {
      const doctorData = [];
      querySnapshot.forEach((doc) => {
        const doctor = doc.data();
        doctor.id = doc.id;
        doctorData.push(doctor);
      });
      setDoctors(doctorData);
    });
  };

  useEffect(() => {
    fetchDataFromFirestore();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>Name: {item.name}</Text>
      <Text>Specialist: {item.specialist}</Text>
      <Text>Rating: {item.rating}</Text>
      <Text>Slots:</Text>
      <FlatList
        data={item.slots}
        renderItem={({ item: slot }) => (
          <View style={styles.slotItem}>
            <Text>Date: {slot.date}</Text>
            <Text>Time: {slot.time}</Text>
            <Text>Booked: {slot.booked ? "Yes" : "No"}</Text>
          </View>
        )}
        keyExtractor={(slot) => slot.time} // Assuming time can be a unique key
      />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Prheader Name={"Specialist"} Add={"/list"}></Prheader>
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
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default App;

import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
} from "firebase/firestore";

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

const Add = () => {
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    const db = getFirestore();
    const doctorsCollection = collection(db, "doctors");
    const querySnapshot = await getDocs(doctorsCollection);
    const fetchedDoctors = [];
    querySnapshot.forEach((doc) => {
      fetchedDoctors.push({ id: doc.id, ...doc.data() });
    });
    setDoctors(fetchedDoctors);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const addDummyData = async () => {
    const db = getFirestore();
    const specialist = "dermatologist";
    const doctorsCollection = collection(db, specialist);

    const dummyDoctors = [
      {
        name: "Dr. Ravikant Chauhan",
        experience: 15,
        specialist: "Dermatologist",
        address:
          "229, 7th Main Rd, HRBR Layout 2nd Block, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043, India, Landmark: Near Bosch Showroom, Bangalore",
        imageURL:
          "https://imagesx.practo.com/providers/dr-ravikant-chauhan-dermatologist-bangalore-eb64eebd-ff29-4048-bfb4-f58d0cac4a28.jpg?i_type=t_70x70",
        rewards: ["IADVL - 2014"],
        description:
          "Dr. Ravikant Chauhan has special interest hair transplantation, dermatosurgery, and cosmetic dermatology. Believes in minimalistic approach towards aesthetic concerns.",
        contact: "+91 80471 86783",
        extension: "Ext. 110",
        education: [
          "MBBS - Dr B R Ambedkar medical college, 2009",
          "DDVL - Father Muller Medical College, Mangalore, 2015",
        ],
      },
    ];

    dummyDoctors.forEach(async (doctor) => {
      await addDoc(doctorsCollection, doctor);
    });

    fetchDoctors();

    Alert.alert("Data Added", "Data has been added successfully!");
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Doctors</Text>
        <Button title="Add Data" onPress={addDummyData} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    // Remove marginBottom
  },
  doctorContainer: {
    marginBottom: 20, // Change to marginTop: 20
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default Add;

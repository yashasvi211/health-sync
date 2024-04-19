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
import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs,
} from "@firebase/firestore";
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
    const specialist = "gynecologists";
    const doctorsCollection = collection(db, specialist);

    const dummyDoctors = [
      {
        name: "Dr. Anuj Sharma",
        experience: 25,
        specialist: "Gynacolagist",
        address: "123456 Popopop",
        imageURL:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFSEadwAbj9MXCXdRr6p8PvgrbbU-P4ArkLdEKueRMLp3IKbPyafOUdLacog&s",
        reviews: "Good Doc",
        specializations: ["Laparoscopic Surgeon", "General Surgeon"],
        rewards: [
          "Travel Award At International Gastrointestinal Conference In Barcelona - 2013",
          "Trained In Advanced Laparoscopic Surgery Coimbatore In July - 2004",
          "Trained In Laparoscopic Bariatric Surgery In Belgium With Dr. Luc Lehmans, A Renowned Surgeon For Hand Sewn Anastomoses. At Az Nikolas Hospital, Belgium In - 2007",
          "Surgical Programme At University Of Hospital Heidelberg, Germany (Pancreatic Cancer Referral Centre) - 2005",
          "Got Scholarship To Attend Workshop On Research Ethics At Harvard University Boston",
        ],
        description:
          "MBBS, MS - General Surgery, Training in Surgical Oncology G.I. Oncology " +
          "Laparoscopic Surgeon, General Surgeon, Proctologist, Bariatric Surgeon " +
          "29 Years Experience Overall, 24 years as a specialist",
        contact: "+91 80471 86783",
        extension: "Ext. 110",
        education: [
          "MBBS - Kevempu University, 1995",
          "MS - General Surgery - Rajiv Gandhi University of Health Sciences, 2000",
          "Training in Surgical Oncology (G.I. Oncology) - Tata Memorial Hospital, Mumbai, 2003",
        ],
        history: [
          "2009 - 2013 Vice-President Medical Service & GI Laproscopic surgeon at Nova Specialty Surgery",
          "2002 - 2009 Department of General Surgery at St. John's Medical College Hospital Bangalore",
          "2000 - 2002 Registrar at Manipal Hospital",
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

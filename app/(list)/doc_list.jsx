import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  ScrollView,
} from "react-native"; // Import Alert
import { SafeAreaView } from "react-native-safe-area-context";
import { initializeApp } from "@firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  setDoc,
  getDocs, // Import getDocs
} from "@firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOcckDgNR3PETeXuxpQDjfjUi4-3qQnaQ",
  authDomain: "health-sync-cdc19.firebaseapp.com",
  databaseURL: "https://health-sync-cdc19-default-rtdb.firebaseio.com",
  projectId: "health-sync-cdc19",
  storageBucket: "health-sync-cdc19.appspot.com",
  messagingSenderId: "240815674969",
  appId: "1:240815674969:web:b0934364bfe137f6fc4348",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const App = () => {
  const [doctors, setDoctors] = useState([]);

  // Function to fetch doctors data from Firestore
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

  // Function to add dummy data
  const addDummyData = async () => {
    const db = getFirestore();
    const doctorsCollection = collection(db, "doctors");

    const dummyDoctors = [
      {
        name: "Piool Agori",
        experience: 25,
        specialist: "Gynacolagist",
        address: "123456 Popopop",
        imageURL:
          "https://imagesx.practo.com/providers/dr-nanda-rajaneesh-laparoscopic-surgeon-bangalore-88552925-3c16-4eaf-ba15-689083c94815.jpg?i_type=t_70x70",
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
        experience: [
          "2009 - 2013 Vice-President Medical Service & GI Laproscopic surgeon at Nova Specialty Surgery",
          "2002 - 2009 Department of General Surgery at St. John's Medical College Hospital Bangalore",
          "2000 - 2002 Registrar at Manipal Hospital",
        ],
      },

      // Add more doctors as needed
    ];

    dummyDoctors.forEach(async (doctor) => {
      await addDoc(doctorsCollection, doctor);
    });

    fetchDoctors();

    Alert.alert("Data Added", "Dummy data has been added successfully!");
  };

  const renderDoctors = () => {
    if (doctors.length === 0) {
      return <Text>Loading...</Text>;
    }

    return doctors.map((doctor) => (
      <View key={doctor.id} style={styles.doctorContainer}>
        <Text>Name: {doctor.name}</Text>
        <Text>
          Phone No: {doctor.contact} Dial the extension given below after the
          call connects:{doctor.extension}
        </Text>
        <Text>Experience: {doctor.experience} years</Text>
        <Text>Address: {doctor.address}</Text>
        <Text>Specialist: {doctor.specialist}</Text>
        <Text>Desription: {doctor.description}</Text>
        <Text>
          Specializations:
          {"\n"}
          {doctor.specializations.map((specialization, index) => (
            <Text key={index}>
              {index + 1}. {specialization}
              {"\n"}
            </Text>
          ))}
        </Text>
        <Text>
          Awards:
          {"\n"}
          {doctor.rewards &&
            doctor.rewards.map((reward, index) => (
              <Text key={index}>
                {index + 1}. {reward}
                {"\n"}
              </Text>
            ))}
        </Text>
        <Image source={{ uri: doctor.imageURL }} style={styles.image} />
      </View>
    ));
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.heading}>Doctors</Text>
        <Button title="Add Data" onPress={addDummyData} />
        {renderDoctors()}
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
    marginBottom: 20,
  },
  doctorContainer: {
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
});

export default App;

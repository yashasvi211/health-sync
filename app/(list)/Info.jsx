// import { View, Text } from "react-native";
// import { useRoute } from "@react-navigation/native";

// const Info = ({ route }) => {
//   const { paramKey } = route.params;
//   const db = route.params.db;

//   return (
//     <>
//       <View>
//         <Text>{paramKey}</Text>
//         <Text>{db}</Text>
//       </View>
//     </>
//   );
// };

// export default Info;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Link } from "expo-router";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigation } from "expo-router";
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

const Info = ({ route }) => {
  const navigation = useNavigation();
  if (!route.params || !route.params.paramKey) {
    return <Text>Error: Missing parameters</Text>;
  }

  const maindoc = route.params.paramKey;
  const databasename = route.params.db;
  const [doctors, setDoctors] = useState([]);

  const fetchDoctors = async () => {
    try {
      const db = getFirestore();
      const doctorsCollection = collection(db, databasename);
      const querySnapshot = await getDocs(doctorsCollection);
      const fetchedDoctors = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDoctors(fetchedDoctors);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, []);
  const handlePress = (docid, db) => {
    navigation.navigate("Info", { paramKey: docid, db: db });
  };

  const renderDoctors = () => {
    if (doctors.length === 0) {
      return <Text>Loading...</Text>;
    }

    const filteredDoctors = doctors.filter((doctor) => doctor.id === maindoc);

    return filteredDoctors.map((doctor) => (
      <View style={styles.doctorContainer} key={doctor.id}>
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.name}>{doctor.id}</Text>
          <Text style={styles.specialist}>{doctor.specialist}</Text>
          <Text style={styles.phone}>
            Experience of {doctor.experience} years.
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: doctor.imageURL }} style={styles.image} />
        </View>
      </View>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>{renderDoctors()}</ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    elevation: 59,
    shadowColor: "#000",

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  doctorContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  imageContainer: {
    marginLeft: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 50,
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  specialist: {
    fontSize: 16,
    marginBottom: 5,
  },
  phone: {
    fontSize: 14,
    color: "gray",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  touchable: {
    marginHorizontal: 10, // Adjust this value according to your preference
  },
});

export default Info;

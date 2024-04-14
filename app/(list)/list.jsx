import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import ListComponent from "../../components/ListComponet";
import { Link } from "expo-router";
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc, Firestore } from "firebase/firestore";

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
        <Text style={styles.headerText}>Categories</Text>
      </View>
    );
  };
  const ShowAlert = () => {
    Alert.alert(
      "Complete",
      "Data Sent",
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  };
  // --------------------------------------------------------
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
  const sentdatatofirebase = async () => {
    const firestore = getFirestore();
    await setDoc(doc(firestore, "user", "user_id"), {
      phone: "123456789",
      name: "Animesh Kumar",
      age: 123,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopHeader />
      <ScrollView>
        <View style={styles.content}>
          <Link href="/doc_list" asChild>
            <TouchableWithoutFeedback>
              <ListComponent
                disease="Diabetes"
                info="Endocrinologist. Specialized care for managing blood sugar."
              />
            </TouchableWithoutFeedback>
          </Link>
        </View>
      </ScrollView>
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

export default App;

import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  Button,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigation } from "expo-router";
import { Calendar } from "react-native-calendars";

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

const Book = ({ route }) => {
  const maindoc = route.params.paramKey;
  const databasename = route.params.db;

  const [selectedDate, setSelectedDate] = useState(null);
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
  const [markedDates, setMarkedDates] = useState({});

  useEffect(() => {
    const today = new Date();
    const marked = {};
    marked[today.toISOString().split("T")[0]] = { disabled: true };
    for (let i = 1; i <= 15; i++) {
      const nextDate = new Date();
      nextDate.setDate(today.getDate() + i);
      marked[nextDate.toISOString().split("T")[0]] = {};
    }
    setMarkedDates(marked);
  }, []);

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setShowTimeSlotModal(true);
  };

  const timeSlots = [];
  let time = new Date();
  time.setHours(13, 30, 0, 0);
  while (time.getHours() < 18) {
    timeSlots.push(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    time.setMinutes(time.getMinutes() + 30);
  }

  const handleTimeSlotSelect = (slot) => {
    setShowTimeSlotModal(false);

    Alert.alert(
      "Booking Confirmation",
      `You have booked an appointment on ${selectedDate} at ${slot}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title="Book Appointment"
        onPress={() => setShowTimeSlotModal(true)}
      />

      {/* Calendar Modal */}
      <Modal visible={showTimeSlotModal} animationType="slide">
        <View style={styles.modalContainer}>
          <Calendar
            markedDates={markedDates}
            onDayPress={(day) => handleDateSelect(day)}
            minDate={new Date()}
            maxDate={new Date(new Date().getTime() + 15 * 24 * 60 * 60 * 1000)}
          />
          <Button title="Close" onPress={() => setShowTimeSlotModal(false)} />
        </View>
      </Modal>

      {/* Time Slot Modal */}
      <Modal visible={showTimeSlotModal} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select a Time Slot</Text>
            {timeSlots.map((slot, index) => (
              <TouchableOpacity
                key={index}
                style={styles.timeSlotButton}
                onPress={() => handleTimeSlotSelect(slot)}
              >
                <Text>{slot}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Button title="Close" onPress={() => setShowTimeSlotModal(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Your styles here
});

export default Book;

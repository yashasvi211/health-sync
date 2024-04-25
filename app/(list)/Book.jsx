import { initializeApp } from "firebase/app";
import {
  setDoc,
  doc,
  getFirestore,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Alert,
  Modal,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { Calendar } from "react-native-calendars";
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

const Book = ({ route }) => {
  const databasename = route.params.db;
  const maindoc = route.params.paramKey;
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);

  const today = new Date().toISOString().split("T")[0];
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15);

  const timeSlots = [];
  let time = new Date();
  time.setHours(13, 30, 0, 0);
  while (time.getHours() < 18) {
    timeSlots.push(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    time.setMinutes(time.getMinutes() + 30);
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date.dateString);
    setShowTimeSlotModal(true);
  };

  const handleTimeSlotSelect = (slot) => {
    setShowTimeSlotModal(false);
    check(slot, selectedDate);
    Alert.alert(
      "Booking Confirmation",
      `You have booked an appointment on ${selectedDate} at ${slot}`,
      [
        {
          text: "OK",
          onPress: () => {
            console.log("OK Pressed");
            navigation.goBack(); // Navigate back to the previous screen
          },
        },
      ]
    );
  };

  const check = async (slot, selectedDate) => {
    try {
      const db = getFirestore();
      const appointmentsCollection = collection(db, databasename);
      const appointmentRef = doc(appointmentsCollection, maindoc);
      const appointmentDoc = await getDoc(appointmentRef);
      const existingTempData = appointmentDoc.data()?.temp || [];
      const newTempData = {
        date: selectedDate,
        time: slot,
      };
      const appointmentData = {
        temp: [...existingTempData, newTempData],
      };
      await setDoc(appointmentRef, appointmentData, { merge: true });
      console.log("Appointment added successfully!");
    } catch (error) {
      console.error("Error adding appointment: ", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.name}>{maindoc}</Text>
      <Calendar
        onDayPress={handleDateSelect}
        markedDates={{
          [selectedDate]: { selected: true, disableTouchEvent: true },
        }}
        showWeekNumbers={true}
        disableAllTouchEventsForDisabledDays={true}
        style={styles.calendar}
        minDate={today}
        maxDate={maxDate.toISOString().split("T")[0]}
        theme={{
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "#00adf5",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#2d4150",
          indicatorColor: "#00adf5",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 16,
          textMonthFontSize: 16,
          textDayHeaderFontSize: 16,
        }}
      />

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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  calendar: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 2,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    width: "80%",
    maxHeight: "60%",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeSlotButton: {
    padding: 10,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default Book;

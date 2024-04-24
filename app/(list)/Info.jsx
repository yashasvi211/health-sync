import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Button,
  Alert,
} from "react-native";
import { Link } from "expo-router";
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

const Info = ({ route }) => {
  const navigation = useNavigation();
  if (!route.params || !route.params.paramKey) {
    return <Text>Error: Missing parameters</Text>;
  }

  const maindoc = route.params.paramKey;
  const databasename = route.params.db;
  const [doctors, setDoctors] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
  const [showTimeSlotModal, setShowTimeSlotModal] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false); // State to control calendar visibility

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
  const handlePress = (maindoc, databasename) => {
    navigation.navigate("Book", { paramKey: maindoc, db: databasename });
  };
  const handleDateSelect = (date) => {
    // Check if the selected date is not a Saturday or Sunday
    const selectedDay = new Date(date.dateString).getDay();
    if (selectedDay !== 0 && selectedDay !== 6) {
      setSelectedDate(date.dateString);
      setShowTimeSlotModal(true); // Show the time slot modal
    }
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

  const today = new Date().toISOString().split("T")[0]; // Get today's date in "yyyy-mm-dd" format
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15); // 15 days after today

  const timeSlots = [];
  let time = new Date();
  time.setHours(13, 30, 0, 0); // Start at 1:30 PM
  while (time.getHours() < 18) {
    timeSlots.push(
      time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
    time.setMinutes(time.getMinutes() + 30); // Increment by 30 minutes
  }

  const handleTimeSlotSelect = (slot) => {
    setSelectedTimeSlot(slot);
    setShowTimeSlotModal(false); // Hide the modal after selection
    // Show alert for booking confirmation
    Alert.alert(
      "Booking Confirmation",
      `You have booked an appointment on ${selectedDate} at ${slot}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {showCalendar && ( // Render the calendar only when showCalendar is true
        <Calendar
          onDayPress={handleDateSelect}
          markedDates={{
            [selectedDate]: { selected: true, disableTouchEvent: true },
          }}
          showWeekNumbers={true}
          disableAllTouchEventsForDisabledDays={true}
          style={styles.calendar}
          minDate={today} // Set the minimum selectable date to today
          maxDate={maxDate.toISOString().split("T")[0]} // Convert maxDate to string format
        />
      )}
      <ScrollView>{renderDoctors()}</ScrollView>

      {/* Modal for selecting time slot */}
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

      <Button
        title="Book Appointment"
        onPress={() => handlePress(maindoc, databasename)} // Show the calendar when the button is pressed
      />
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
    marginHorizontal: 10,
  },
  calendar: {
    marginBottom: 20,
  },

  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  modalContent: {
    height: 300, // Set a fixed height for the modal content
    width: "100%", // Take full width
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  timeSlotButton: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default Info;

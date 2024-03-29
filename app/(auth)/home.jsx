import React, { useState } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useUser } from "@clerk/clerk-expo";
import Banner from "../../components/Banner";
import Card from "../../components/Cards";
import { Link } from "expo-router";
import Scard from "../../components/Scards";
import { Vibration } from "react-native";
import { Button } from "react-native";
const Home = () => {
  const { user } = useUser();
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Link href="/list" asChild>
          <TouchableWithoutFeedback
            onPress={() => {
              Vibration.vibrate(50);
            }}
          >
            <Card
              imageUri={require("../../assets/doctor.webp")}
              header="Book Appointment"
              description="Confirmed Appointment"
            />
          </TouchableWithoutFeedback>
        </Link>
        <Card
          imageUri={require("../../assets/doctor_videocall.webp")}
          header="Instant Video Consult"
          description="Connect within 60 secs"
        />
      </View>
      <View style={styles.cardContainer}>
        <Scard
          imageUri={require("../../assets/doctor_videocall.webp")}
          header="Medicines"
        />
        <Scard
          imageUri={require("../../assets/laboratory.jpg")}
          header="Lab Tests"
        />
        <Scard
          imageUri={require("../../assets/doctor_ot.jpg")}
          header="Surgeries"
        />
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.bannerContainer}>
          <Banner imageUri={require("../../assets/doctor.webp")} />
          <Banner imageUri={require("../../assets/doctor.webp")} />
          <Banner imageUri={require("../../assets/doctor.webp")} />
          <Banner imageUri={require("../../assets/doctor.webp")} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  cardContainer: {
    paddingTop: 10,
    flexDirection: "row",
    paddingTop: 16,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  bannerContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
});

export default Home;

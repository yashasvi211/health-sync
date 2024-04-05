import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Vibration,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ListComponent from "../../components/ListComponet";
import { Link } from "expo-router";

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

  return (
    <SafeAreaView style={styles.container}>
      <TopHeader />
      <ScrollView>
        <View style={styles.content}>
          <ListComponent
            disease="Diabetes"
            info="Endocrinologist. Specialized care for managing blood sugar."
          />
          <ListComponent
            disease="Hypertensi-on"
            info="Cardiologist. Heart and blood vessel health management."
          />
          <ListComponent
            disease="Asthma"
            info="Pulmonologist. Lung function assessment and treatment."
          />
          <ListComponent
            disease="Cancer"
            info="Oncologist. Diagnosis and treatment of cancerous tumors."
          />
          <ListComponent
            disease="Depression"
            info="Psychiatrist. Mental health evaluation and therapy provision."
          />
          <ListComponent
            disease="Alzheimer's Disease"
            info="Neurologist. Brain health assessment and dementia management."
          />
          <ListComponent
            disease="Stroke"
            info="Neurologist. Specialized care for brain blood flow issues."
          />
          <ListComponent
            disease="Obesity"
            info="Endocrinologist, Nutritionist. Weight management, lifestyle changes."
          />
          <ListComponent
            disease="Arthritis"
            info="Rheumatologist. Joint pain management and treatment."
          />
          <ListComponent
            disease="Osteoporosis"
            info="Orthopedist, Endocrinologist. Bone health management, fracture prevention."
          />
          <ListComponent
            disease="HIV/AIDS"
            info="Infectious Disease Specialist. Antiretroviral treatment, managing complications."
          />
          <ListComponent
            disease="Parkinson's Disease"
            info="Neurologist. Management of movement disorders and symptoms."
          />
          <ListComponent
            disease="Epilepsy"
            info="Neurologist, Epileptologist. Seizure diagnosis and management."
          />
          <ListComponent
            disease=" Kidney Disease"
            info="Nephrologist. Kidney function monitoring, treatment planning."
          />
          <ListComponent
            disease="COPD"
            info="Pulmonologist. Management of chronic lung disease symptoms."
          />
          <ListComponent
            disease="Heart Disease"
            info="Cardiologist. Heart health assessment and treatment planning."
          />
          <ListComponent
            disease="Anxiety Disorders"
            info="Psychiatrist, Therapist. Anxiety management, therapy provision."
          />
          <ListComponent
            disease="Migraine"
            info="Neurologist. Diagnosis and treatment of severe headaches."
          />
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

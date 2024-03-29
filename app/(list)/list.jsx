import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { Vibration } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const App = () => {
  const [pixel, setpixel] = useState(0);

  const incrementCount = () => {
    Vibration.vibrate(50);
    setpixel(pixel + 1);
  };

  return (
    <SafeAreaView>
      <Text>
        The Hero is the villan in any other's life and same goes for villan it
        maybe hero of someone's life
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },
});

export default App;

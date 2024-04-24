import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";
import Detail from "./Detail";
import Add from "./Add";
import Info from "./Info";
import Book from "./Book";
import { TouchableOpacity, Text } from "react-native";

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          title: "Home",

          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Add"
        component={Add}
        options={{ headerShown: true }}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{ headerShown: true }}
      />

      <Stack.Screen
        name="Book"
        component={Book}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <AppStack />
    </NavigationContainer>
  );
}

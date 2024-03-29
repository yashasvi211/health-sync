import { View, Button, StyleSheet } from "react-native";
import { useState } from "react";
import { useUser, useAuth } from "@clerk/clerk-expo";

const LogoutButton = ({ title }) => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return <Button onPress={doLogout} title={title} color="#6c47ff" />;
};

const Profile = () => {
  const { user } = useUser();

  return (
    <View>
      <LogoutButton title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
});

export default Profile;

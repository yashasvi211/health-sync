import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import Banner from "../../components/Banner";
const Profile = () => {
  const { user } = useUser();
  const onSaveUser = () => {
    console.log(user.fullName);
    console.log(user.fullName);
    console.log(user.fullName);
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={onSaveUser}
        title="Update account"
        color={"#6c47ff"}
      ></Button>
      <Banner imageUri={imageUrl} />
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

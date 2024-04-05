import { View, Button, Text, StyleSheet } from "react-native";
import { useUser, useAuth } from "@clerk/clerk-expo";

const LogoutButton = ({ title }) => {
  const { signOut } = useAuth();

  const doLogout = () => {
    signOut();
  };

  return (
    <View style={styles.buttonContainer}>
      <Button onPress={doLogout} title={title} color="#6c47ff" />
    </View>
  );
};

const Profile = () => {
  const { user } = useUser();
  const name = user.fullName;
  const id = user.id;
  const Fn = user.firstName;
  const Ln = user.lastName;
  const email = user.primaryEmailAddress.emailAddress;
  const showId = id.substring(5);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hi, {name}</Text>
      <Text style={styles.detailheader}>User Details:</Text>
      {/* <Text style={styles.detail}>First Name: {Fn}</Text>
      <Text style={styles.detail}>Last Name: {Ln}</Text> */}
      <Text style={styles.detail}>Email ID: {email}</Text>
      <Text style={styles.detail}>User ID: {showId}</Text>
      <LogoutButton title="Logout" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: "bold",
  },
  detailheader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  detail: {
    fontSize: 16,
    marginBottom: 5,
  },
  buttonContainer: {
    width: "50%",
    marginTop: 20,
  },
});

export default Profile;

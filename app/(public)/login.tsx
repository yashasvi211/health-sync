import { useSignIn } from '@clerk/clerk-expo';
import { Link } from 'expo-router';
import React, { useState } from 'react';
 
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const Login = () => {
  const { signIn, setActive, isLoaded } = useSignIn();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignInPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);
    try {
      const completeSignIn = await signIn.create({
        identifier: emailAddress,
        password,
      });

 
      await setActive({ session: completeSignIn.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.login}>
          <Text style={{ ...styles.subtitle, color: 'white' }}>Welcome Back</Text>
          <Text style={styles.subtitle}>Log into your account</Text>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            value={emailAddress}
            onChangeText={(text) => setEmailAddress(text)}
            placeholder="Enter your Username"
            placeholderTextColor="#888"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#888"
            secureTextEntry
          />
          <View>
            <TouchableOpacity style={styles.loginButton} onPress={onSignInPress}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <Link href="/register" asChild>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </Link>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262b34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login: {
    backgroundColor: '#131820',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: 'grey',
    marginBottom: 4,
  },
  label: {
    color: 'white',
    paddingBottom: 10,
  },
  input: {
    height: 50,
    width: 300,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    color: 'white',
  },
  loginButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  // You might want to add styles for the signupButton and other elements
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // Other styles...
});

export default Login;


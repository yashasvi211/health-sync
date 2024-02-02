import { Button, TextInput, View, StyleSheet } from 'react-native';
import { useSignUp } from '@clerk/clerk-expo';
import Spinner from 'react-native-loading-spinner-overlay';
import { useState } from 'react';
import { Stack } from 'expo-router';

const Register = () => {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }
    setLoading(true);

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      alert(err.errors[0].message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={[styles.container, styles.darkBackground]}>
      <Stack.Screen options={{ headerBackVisible: !pendingVerification }} />
      <Spinner visible={loading} />

      {!pendingVerification && (
        <>
          <TextInput
            autoCapitalize="none"
            placeholder="yashasvi@gmail.com"
            value={emailAddress}
            onChangeText={setEmailAddress}
            style={[styles.inputField, styles.lightInput]}
          />
          <TextInput
            placeholder="password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={[styles.inputField, styles.lightInput]}
          />

          <Button onPress={onSignUpPress} title="Sign up" color={'#6c47ff'} />
        </>
      )}

      {pendingVerification && (
        <>
          <View>
            <TextInput value={code} placeholder="Code..." style={[styles.inputField, styles.lightInput]} onChangeText={setCode} />
          </View>
          <Button onPress={onPressVerify} title="Verify Email" color={'#6c47ff'} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  darkBackground: {
    backgroundColor: '#121212', // Dark background color
  },
  lightInput: {
    color: '#fff', // Text color for light input fields
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#6c47ff',
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#333', // Dark background color for input fields
  },
  button: {
    margin: 8,
    alignItems: 'center',
  },
});

export default Register;

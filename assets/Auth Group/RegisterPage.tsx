import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import auth from "@react-native-firebase/auth"
// Register screen component, just the input fields and 3 buttons (as of the ui)
// Rendered conditionally in AuthPage
const RegisterScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confrimPassword, setConfirmPassword] = useState("");

  const nav = useNavigation<NativeStackNavigationProp<any>>();

  const createProfile = async (response: any) => {
    // to do later, will add stuff to firestore realtime database
    // now i just made a user autentithication system
    // to see how to do this visit https://www.youtube.com/watch?v=mZlKwRV4MC8
  }

  const registerAndGoToMainFlow = async (response: any) => {
    if(email && password && password == confrimPassword)
    {
      try{
        const response = await auth().createUserWithEmailAndPassword(
          email, 
          password
        )

        if(response.user)
        {
          await createProfile(response);
          nav.replace("Home")
        }

      } catch(e:any)
      {
        // just log the error now, if there is one but were gonna have to make a better error logger in the future
        Alert.alert("Oops! An error occured", e.toString())
      }
    }
  }
  
  return (
    <View>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        value={confrimPassword}
        onChangeText={setConfirmPassword}
      />
      <TouchableOpacity style={styles.button} onPress={registerAndGoToMainFlow}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Register with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.appleButton]}>
        <Text style={styles.buttonText}>Register with Apple ID</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  linkText: {
    color: '#007BFF',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  appleButton: {
    backgroundColor: '#000000',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default RegisterScreen;

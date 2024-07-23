import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

const LoginScreen = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity onPress={() => nav.push("Consult")} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Exemplu formular</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.push("AssignPatient")} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Add Patient</Text>
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

export default LoginScreen;

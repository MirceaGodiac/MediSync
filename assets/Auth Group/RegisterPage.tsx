import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Dimensions, Alert } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";
import { ScrollView, Switch } from 'react-native-gesture-handler';
// Register screen component, just the input fields and 3 buttons (as of the ui)
// Rendered conditionally in AuthPage


function RegisterScreen() {

  const [CNP, setCNP] = useState("6150716016696");
  const [nrTelefon, setNrTelefon] = useState("+40754213564")
  const [name, setName] = useState("Marius");
  const [surName, setSurName] = useState("Popescu");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDoctor, setIsDoctor] = useState(false);
  const [doctorId, setDoctorId] = useState("GjxmcA1GUgZ158wnaLwSOSixVsm1");

  const nav = useNavigation<NativeStackNavigationProp<any>>();

  const createProfile = async (response: FirebaseAuthTypes.UserCredential) => {
    // to do later, will add stuff to firestore realtime database
    // now i just made a user autentithication system
    // to see how to do this visit https://www.youtube.com/watch?v=mZlKwRV4MC8
    
    db().ref(`/users/${response.user.uid}`).set({ CNP, nrTelefon, name,
       surName, email, isDoctor,doctorId });
  }

  const registerAndGoToMainFlow = async (response: any) => {
    if (email && password) {
      try {
        const response = await auth().createUserWithEmailAndPassword(
          email,
          password
        )

        if (response.user) {
          console.log(response.user.uid)
          await createProfile(response);
          nav.replace("Home")
        }

      } catch (e: any) {
        // just log the error now, if there is one but were gonna have to make a better error logger in the future
        Alert.alert("Oops! An error occured", e.toString())
      }
    }
  }

  return (
    <View>
      <ScrollView>
        <Text style={styles.title}>Register</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="CNP"
          autoCapitalize="none"
          autoCorrect={false}
          value={CNP}
          onChangeText={setCNP}
        />

        <TextInput
          style={styles.input}
          placeholder="Numar Telefon"
          autoCapitalize="none"
          autoCorrect={false}
          value={nrTelefon}
          onChangeText={setNrTelefon}
        />

        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Name"
          autoCapitalize="none"
          autoCorrect={false}
          value={surName}
          onChangeText={setSurName}
        />

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

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Pacient</Text>
          <Switch
            value={isDoctor}
            onValueChange={setIsDoctor}
          />
          <Text style={styles.switchLabel}>Doctor</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={registerAndGoToMainFlow}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={styles.buttonText}>Register with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.appleButton]}>
          <Text style={styles.buttonText}>Register with Apple ID</Text>
        </TouchableOpacity>
      </ScrollView>

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
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  switchLabel: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});

export default RegisterScreen;

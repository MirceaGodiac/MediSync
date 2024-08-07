import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/database";

const App = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();
  const [nrTelefon, setNrTelefon] = useState('');
  let query: any;

  const handleAssign = async () => {
    try {

      db().ref('users')
      .orderByChild('nrTelefon')
      .equalTo(nrTelefon)
      .limitToFirst(1)
      .once('value', data => {
        const userId = Object.keys(data.val())[0];
        db()
        .ref(`/users/` + userId)
        .update( { doctorId: auth().currentUser?.uid })
        .then(() => Alert.alert('Date pacient actualizate cu succes!'))
        .catch(error => {
          Alert.alert('Failed to update data', error.message); // Display an error message to the user
        });
      });
   
    } catch (error) {
      Alert.alert("Oops! No user found with this phone number!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add patient</Text>
      <TextInput
        style={styles.input}
        placeholder="Patient Phone Number"
        onChangeText={setNrTelefon}
        value={nrTelefon}
        keyboardType="phone-pad"
      />

      <TouchableOpacity onPress={handleAssign} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Assign Patient...</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAssign} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Show Your Patient List</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.push("Home")} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Return Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.push("Auth")} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Return To Login</Text>
      </TouchableOpacity>
 
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 40,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      height: 60,
      borderColor: 'gray',
      borderWidth: 1,
      marginVertical: 20,
      padding: 10
    },
    message: {
      marginTop: 30,
      fontSize: 16,
      color: 'red',
    },
    button: {
      backgroundColor: '#007BFF',
      paddingVertical: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginVertical: 20,
    },
    googleButton: {
      backgroundColor: '#DB4437',
    },
    buttonText: {
      color: '#ffffff',
      fontSize: 16,
    },
});

export default App;

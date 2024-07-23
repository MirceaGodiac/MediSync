import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';
import assignPatientToDoctor from './assignPage';
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const nav = useNavigation<NativeStackNavigationProp<any>>();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleAssign = async () => {
    setMessage('');
    // console.log('');
    try {
      const doctorId = 'qdaavws3czRcXobFySVwv7rGQLe2';
      await assignPatientToDoctor(phoneNumber, doctorId);
      setMessage('Patient assigned successfully');
      // console.log('Patient assigned successfully');
    } catch (error) {
      setMessage('Error: ${error.message}');
      // console.log('Error: ${error.message}');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add patient</Text>
      <TextInput
        style={styles.input}
        placeholder="Patient Phone Number"
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        keyboardType="phone-pad"
      />

      <Button title="Assign Patient..." onPress={() => handleAssign}/>
      {message ? <Text>{message}</Text> : null}

      <TouchableOpacity onPress={() => nav.push("Home")} style={[styles.button, styles.googleButton]}>
        <Text style={styles.buttonText}>Return Home</Text>
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

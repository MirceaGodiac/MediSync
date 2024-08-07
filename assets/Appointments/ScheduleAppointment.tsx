import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    getDocs,
    snapshotEqual
} from 'firebase/firestore';
import { firebase, FirebaseDatabaseTypes } from '@react-native-firebase/database';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import db from "@react-native-firebase/database";
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

import { app } from '../../App';

// TODO: Replace the following with your app's Firebase project configuration

type RootStackParamList = {
    StartPage: undefined;
    PacientRegister: undefined;
    DoctorRegister: undefined;
    OrganisationRegister: undefined;
    Home: { userID: any };
    Consult: { user: any };
    ForgotPassword: undefined;
    SelectDoctor: undefined;
    ScheduleAppointment: { doctorID: any };
};

interface Doctor {
    uid: string;
    name: string;
}

interface Appointment {
    StartTime: string;
    EndTime: string;
  }
  

type Props = NativeStackScreenProps<RootStackParamList, 'ScheduleAppointment'>;

function ScheduleAppointmentScreen({ route, navigation }: Props) {
    const [doctorID, setDoctorID] = useState(route.params.doctorID);

    const [date, setDate] = useState(new Date());

    const addAppointment = async () => {
        let StartTime = date;
        let EndTime = new Date(date.setHours(date.getHours() + 1));
        try {
          // Reference to the doctor's appointments list in the database
          const appointmentsRef = db().ref(`users/${doctorID}/appointments`);
      
          // Create a new appointment object
          const newAppointment: Appointment = {
            StartTime: StartTime.getTime().toString(),
            EndTime: EndTime.getTime().toString(),
          };
      
          // Push the new appointment to the appointments list
          await appointmentsRef.push(newAppointment);

          console.log(db().ref(`users`))
      
          console.log('Appointment added successfully');
        } catch (error) {
          console.error('Error adding appointment: ', error);
        }
      };

    return (
        <View style={styles.container}>
            <Button onPress={addAppointment} title={"Fa o programare la " + date.toLocaleString()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
    },
    doctorText: {
        fontSize: 18,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});

export default ScheduleAppointmentScreen;



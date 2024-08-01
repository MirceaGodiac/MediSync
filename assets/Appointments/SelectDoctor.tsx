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


// TODO: Replace the following with your app's Firebase project configuration

type RootStackParamList = {
    Auth: undefined;
    Home: { userID: any };
    Consult: { user: any };
    ForgotPassword: undefined;
    SelectDoctor: undefined;
};

interface Doctor {
    uid: string;
    name: string;
}

type Props = NativeStackScreenProps<RootStackParamList, 'SelectDoctor'>;

function SelectDoctorScreen({ route, navigation }: Props) {
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const ref = firebase.database().ref("users");
    let _doctors: Doctor[] = [];
    let count = 0;
    const limit = 100;

    ref.orderByChild("isDoctor").equalTo(true).limitToFirst(limit).on("child_added", (snapshot) => {
        if (snapshot.exists() && count < limit) {
            const name = snapshot.val().name;
            const uid = snapshot.key;
            if (name && uid) {
                _doctors.push({ name: name as string, uid: uid as string });
                count++;

            }

        }
    });

    const onDoctorUpdate = (snapshot: FirebaseDatabaseTypes.DataSnapshot) => {
        if(snapshot.val()) {
            const values: Doctor[] = Object.values(snapshot.val())
            setDoctors(values)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                {doctors.map((doctor) => (
                    <Text key={doctor.uid} style={styles.doctorText}>
                        {doctor.name}
                    </Text>
                ))}
            </ScrollView>
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

export default SelectDoctorScreen;

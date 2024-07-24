import React, { useEffect, useState } from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity, Text } from 'react-native';
import {
    getFirestore, collection, onSnapshot,
    addDoc, deleteDoc, doc,
    query, where,
    getDocs
} from 'firebase/firestore';
import { firebase } from '@react-native-firebase/database';


// TODO: Replace the following with your app's Firebase project configuration

type RootStackParamList = {
    Auth: undefined;
    Home: { userID: any };
    Consult: { user: any };
    ForgotPassword: undefined;
    SelectDoctor: { userID: any, };
};

function SelectDoctorScreen() {
    const [doctors, setDoctors] = useState([{ name: 'Ion de la balcon', userID: '' }]);
    var ref = firebase.database().ref("users");
    let _doctors = [{ name: '', userID: '' }];


    ref.orderByChild("isDoctor").equalTo(true).on("child_added", function (snapshot) {
        _doctors.push({ name: snapshot.val().name, userID: snapshot.key || '' });
        console.log(_doctors)
    });
    setDoctors(_doctors)


    return (
        <View style={styles.container}>
            <View>
                <ScrollView>
                    {
                        doctors.map((doctor, index) => (
                            index != 0 && 
                            <Text key={doctor.userID}>
                                {doctor.name}
                            </Text>
                        ))
                    }

                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'space-around',
    },
});

export default SelectDoctorScreen;

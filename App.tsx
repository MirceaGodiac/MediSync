import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './assets/Auth Group/AuthPage';
import HomeScreen from './assets/Homescreen/home';
import ConsultScreen from './assets/Consult/ConsultScreen';
import { getAuth } from "firebase/auth";
import ForgotPassword from './assets/Auth Group/ForgotPassword';


import { initializeApp } from 'firebase/app';
import SelectDoctorScreen from './assets/Appointments/SelectDoctor';
import { firebase } from '@react-native-firebase/database';
import StartPage from './assets/Auth Group/StartPage';
import PacientRegister from './assets/Auth Group/Pacient/PacientAuth';
import DoctorRegister from './assets/Auth Group/Doctor/DoctorAuth';
import OrganisationRegister from './assets/Auth Group/Organizatie/OrganizationAuth';
import ScheduleAppointmentScreen from './assets/Appointments/ScheduleAppointment';
import CalendarScreen from './assets/appointmentsCalendar';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-lU28AN7mwiMgB5K9A7kYx9Fv9nFOX9c",
  projectId: "medisync-4ec40",
  storageBucket: "medisync-4ec40.appspot.com",
  appId: "1:723071844192:android:be8841da967fd3b8df2805",
  databaseURL: "https://medisync-4ec40-default-rtdb.europe-west1.firebasedatabase.app",
};

const app = initializeApp(firebaseConfig);

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
  CalendarScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name='StartPage' component={StartPage} />
        <RootStack.Screen name="PacientRegister" component={PacientRegister} />
        <RootStack.Screen name="DoctorRegister" component={DoctorRegister} />
        <RootStack.Screen name="OrganisationRegister" component={OrganisationRegister} />
        <RootStack.Screen name="Home" component={HomeScreen} initialParams={{ userID: null }} />
        <RootStack.Screen name="Consult" component={ConsultScreen} />
        <RootStack.Screen name="ForgotPassword" component={ForgotPassword} />
        <RootStack.Screen name="SelectDoctor" component={SelectDoctorScreen} />
        <RootStack.Screen name="ScheduleAppointment" component={ScheduleAppointmentScreen} />
        <RootStack.Screen name="CalendarScreen" component={CalendarScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
export {app};
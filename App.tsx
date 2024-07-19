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

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-lU28AN7mwiMgB5K9A7kYx9Fv9nFOX9c",
  projectId: "medisync-4ec40",
  storageBucket: "medisync-4ec40.appspot.com",
  appId: "1:723071844192:android:be8841da967fd3b8df2805"
};

const app = initializeApp(firebaseConfig);


function App () {
  
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthScreen} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
        <Stack.Screen name="Consult" component={ConsultScreen}/> 
        <Stack.Screen name="ForgotPassword" component={ForgotPassword}/> 
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

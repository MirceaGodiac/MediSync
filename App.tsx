import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './assets/Auth Group/AuthPage'; 
import HomeScreen from './assets/Homescreen/home'; 
import ConsultScreen from './assets/Consult/ConsultScreen';
import AssignPatientScreen from './assets/assignPatientToDoctor/AssignPatientScreen';


function App () {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Auth" component={AuthScreen} />
            <Stack.Screen name="Home" component={HomeScreen} /> 
            <Stack.Screen name="Consult" component={ConsultScreen}/>
            <Stack.Screen name="AssignPatient" component={AssignPatientScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

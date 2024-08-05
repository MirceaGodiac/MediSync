import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './assets/Auth Group/AuthPage'; // Adjust the path as needed
import HomeScreen from './assets/Homescreen/home'; // Create a HomeScreen component
import ChooseWhich from './assets/DiagnosticForm/FormularOrReteta';
import NotifSetter from './assets/DiagnosticForm/NotifSetter';



const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        
        <Stack.Screen name="FormularAnalize" component={ChooseWhich}/>
        <Stack.Screen name="IntervalNotifSetter" component={NotifSetter}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

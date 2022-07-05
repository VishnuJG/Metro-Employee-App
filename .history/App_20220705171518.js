import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Task from './components/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeForm from './components/EmployeeForm';
import Home from './components/Home';
import EmployeeTable from './components/EmployeeTable';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Home' }}/>
        <Stack.Screen name="Add Ticket" component={EmployeeForm} />
        <Stack.Screen name="View Tickets" component={EmployeeTable} />
        <Stack.Screen name="Edit" component={Home} options={{ title: 'Home' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}

import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Task from './components/Task';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TicketForm from './components/TicketForm';
import Home from './components/Home';
import TicketTable from './components/TicketTable';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen name="Add Ticket" component={TicketForm} />
        <Stack.Screen name="View Tickets" component={TicketTable} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}

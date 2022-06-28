import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function Task(props) {
  console.log("Hello")
  return (
    <View style={{border:'1px solid steelblue'}}>
      <Text>{props.id}</Text>
      <Text>{props.name}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
});

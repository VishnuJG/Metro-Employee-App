import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function Task(props) {
  console.log("Hello");
  return (
    <View style={styles.employee}>
      <Text>{props.eid}</Text>
      <Text>{props.ename}</Text>
      <Text>{props.eemail}</Text>

    </View>
    

  );
}

const styles = StyleSheet.create({
  employee:{
    width:'100%',
    flex:1,
    flexDirection:'row',
    justifyContent: 'left',
  }
});

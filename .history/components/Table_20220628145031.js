import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { DataTable } from "react-native-paper";


export default function Table(props) {
  console.log("Hello");
  return (
    <DataTable.Row>
            <DataTable.Cell>{props.eid}</DataTable.Cell>
            <DataTable.Cell>{props.ename}</DataTable.Cell>
            <DataTable.Cell>{props.eemail}</DataTable.Cell>
    </DataTable.Row>
    

  );
}

const styles = StyleSheet.create({
  employee:{
    width:'100%',
    flex:1,
    // flexDirection:'row',
    // justifyContent: 'flex-start',
  }
});

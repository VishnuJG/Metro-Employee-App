import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import { DataTable } from "react-native-paper";


export default function Task(props) {
  console.log("Hello");
  return (
    <DataTable.Row>
            <DataTable.Cell>Radhika</DataTable.Cell>
            <DataTable.Cell>Dosa</DataTable.Cell>
            <DataTable.Cell>23</DataTable.Cell>
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

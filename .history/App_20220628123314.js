import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function App() {

  // const {lanscape}=useDimensions();
  const [emp, onEmpUpdate] = useState([{ id: 0, name: " Vishnu J G" }]);
  const [name, onChangeName] = useState("");
  const [number, onChangeNumber] = useState(0);
  return (
    <View style={styles.container}>
      <Text>Metro Employee App</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        placeholder="Enter your name"
        value={name}
      />
      <View>
      <Text>Enter ID</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Enter your ID"
        keyboardType="numeric"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // topPadding:lanscape?20:0,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

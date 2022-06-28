import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function App() {

  // const {lanscape}=useDimensions();
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text>Metro Employee App</Text>
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
});

import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function App() {

  // const {lanscape}=useDimensions();
  const [emp, onEmpUpdate] = useState([{ id: 0, name: " Vishnu J G", email:"vishnu.jg@metro-gsc.in" }]);
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [number, onChangeNumber] = useState(null);
  const onSubmit=(e)=>{
    e.preventDefault();
    if(!name){
      Alert.alert('Invalid Name', 'Invalid Name field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    }
    if(!email ){ 
      Alert.alert('Invalid Email', 'Invalid Email field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    }
    if(!/\S+@\S+\.\S+/.test(email)){ 
      Alert.alert('Invalid Email', 'Invalid Email field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    }
    if(!number){
      Alert.alert('Invalid Id', 'Invalid ID field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
    }
    console.log(name);
    console.log(email);
    console.log(number);
    onChangeName('');
    onChangeEmail('');
    onChangeNumber(null);
  }
  return (
    <View style={styles.container}>
      <Text>Metro Employee App</Text>
      
        <TextInput
          style={styles.input}
          onChangeText={onChangeName}
          placeholder="Enter your name"
          value={name}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter your Email"
          // keyboardType="numeric"
        />
       
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter your ID"
          keyboardType="numeric"
        />
      <Button title="Submit"
        color="green" 
        onPress={onSubmit}
        />
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
    width:'50%',
    padding: 10,
  },
  inputForm:{
    
  }
});

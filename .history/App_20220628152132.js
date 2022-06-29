import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, ScrollView} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';
import Task from './components/Task';
import { DataTable } from "react-native-paper";
import Table from './components/Table';


export default function App() {

  // const {landscape}=useDimensions();
  const [emp, onEmpUpdate] = useState([{ id: 0, name: " Vishnu J G", email:"vishnu.jg@metro-gsc.in" }]);
  const [name, onChangeName] = useState("");
  const [email, onChangeEmail] = useState("");
  const [id, onChangeid] = useState(null);
  const onSubmit=(e)=>{
    e.preventDefault();
    const scheck = emp.filter((temp)=>{});
    if(!name){
      Alert.alert('Invalid Name', 'Invalid Name field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
      return;
    }
    if(!email){ 
      Alert.alert('Invalid Email', 'Invalid Email field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
      return;
    }
    if(!/\S+@\S+\.\S+/.test(email)){ 
      Alert.alert('Invalid Email', 'Invalid Email field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
      return;
    }
    if(!id){
      Alert.alert('Invalid Id', 'Invalid ID field',[{text: 'Okay', onPress:()=>{console.log("Okay Pressed")}},{text: 'No', onPress:()=>{console.log("No Pressed")}}])
      return;
    }
    console.log(name);
    console.log(email);
    console.log(id);
    const newEmp={id, name, email};
    onChangeName('');
    onChangeEmail('');
    onChangeid(null);
    onEmpUpdate([...emp, newEmp]);
  }
  return (
    <View style={styles.container} >
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
          onChangeText={onChangeid}
          value={id}
          placeholder="Enter your ID"
          keyboardType="numeric"
        />
        <Button title="Submit"
          color="green" 
          onPress={onSubmit}
          /></View>
        {/* <View style={{flex:0.5, flexDirection: 'column'}}>
        {emp.map((newid)=>(<Task key={newid.id} ename={newid.name} eid={newid.id} eemail={newid.email}/>))}
        </View> */}
        
        <DataTable style={{flexDirection: 'column', }} >
          <DataTable.Header style={styles.tableHeader}>
            <DataTable.Title >Id</DataTable.Title>
            <DataTable.Title >Name</DataTable.Title>
            <DataTable.Title >Email</DataTable.Title>
            <DataTable.Title >More</DataTable.Title>
          </DataTable.Header>
          {emp.map((newid)=>(<Table key={newid.id} ename={newid.name} eid={newid.id} eemail={newid.email}/>))}
        </DataTable>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    // paddingTop:20,
    width:'100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width:'50%',
    padding: 10,
  },
  tableHeader: {
    backgroundColor: '#DCDCDC',
  },
  
});

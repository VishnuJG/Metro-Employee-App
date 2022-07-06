import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect,useRef  } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function EmployeeForm({ navigation }) {

    const firstUpdate  = useRef(true);

    const [employees,setEmployees] = useState([])
  
    const [emp, onEmpUpdate] = useState({
        name: "",
        email:"",
        location:"" 
      });
  
    const handleChange = (name,val)=>{
      onEmpUpdate(prevValue => {
        return {
          ...prevValue,
          [name]:val
        }
      })
    }
  
    useEffect(() => {
      if ( firstUpdate .current ) {
        firstUpdate .current = false;
        return;
      }
      console.log(employees);
      onEmpUpdate({
        name: "",
        email:"",
        location:"" 
      });
      Alert.alert('Ticket Added')
    }, [employees])
    
  
    const onSubmit=(e)=>{
      e.preventDefault();
      
      setEmployees(prevValue => {
        return [...prevValue,emp]
      })
      
  
    }
  
    return (
      <View style={styles.container} >
          <View style={styles.container}>
          <Text>Metro Ticket App</Text>
          
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleChange('name',val)}
            placeholder="Enter Ticket type"
            value={emp.name}
          />
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleChange('email',val)}
            value={emp.email}
            placeholder="Enter Ticket sub-type"
          />
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleChange('location',val)}
            value={emp.location}
            placeholder="Enter ticket Description"
          />
  
          <Button title="Submit"
            color="green" 
            onPress={onSubmit}
            />
        </View>

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
    
  });

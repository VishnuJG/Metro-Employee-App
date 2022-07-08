import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect,useRef  } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function EditDetails(props) {
    const firstUpdate  = useRef(true);

    const [ticket,setEmployees] = useState([])
  
    const [tic, onEmpUpdate] = useState({
        name: props.route.params.ticket.issue_type,
        email: props.route.params.ticket.issue_sub_type,
        location: props.route.params.ticket.description 
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
        issue_type: "",
        issue_sub_type:"",
        description:"" 
      });
      Alert.alert('Ticket Added')
    }, [employees])
    
  
    const onSubmit=(e)=>{
      e.preventDefault();
      
      
      setEmployees(prevValue => {
        return [...prevValue,tic]
      })
      props.navigation.navigate("Home");
  
    }
  return (
    <View style={styles.container} >
          <View style={styles.container}>
          <Text>Metro Ticket App</Text>
          
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleChange('issue_type',val)}
            placeholder="Enter Ticket type"
            value={tic.issue_type}
          />
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleChange('issue_sub_type',val)}
            value={tic.email}
            placeholder="Enter Ticket sub-type"
          />
          <TextInput
            style={styles.input}
            onChangeText={(val) => handleChange('description',val)}
            value={tic.location}
            placeholder="Enter ticket Description"
          />
  
          <Button title="Submit"
            color="green" 
            onPress={onSubmit}
            />
        </View>

      </View>
  )
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

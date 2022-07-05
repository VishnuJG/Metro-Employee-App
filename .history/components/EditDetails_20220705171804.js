import { StatusBar } from 'expo-status-bar';
import React, { useState,useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';

export default function EditDetails(props) {
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
  )
}

export default EditDetails
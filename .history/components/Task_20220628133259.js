import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function Task(props) {
  console.log("Hello");
  return (
    // <View >
    //   <Text>{props.id}</Text>
    //   <Text>{props.name}</Text>
      
    // </View>
    <View>
      <Text>{props.name}</Text>
    <ImageBackground style={{flex:1}} source = {{width:200, height:200, uri:'https://picsum.photos/100/500' }}/>
    </View>

  );
}

const styles = StyleSheet.create({
});

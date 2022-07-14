import React from 'react'
import { StyleSheet, Text,Button, View } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

export default function LoadingScreen() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size='large' animating={true}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

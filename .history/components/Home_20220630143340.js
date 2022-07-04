import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      
        <View style={styles.button}>
          <Button title="Add Employee"
              onPress={() =>
                  navigation.navigate('Add Employee')
              }
          />
        </View>

        <View style={styles.button}>
          <Button title="View Employees"
              onPress={() =>
                  navigation.navigate('View Employees')
              }
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
  },
  button:{
    margin:20
  }
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Button, View } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      
        <View style={styles.button}>
          <Button title="Login"
              onPress={() =>
                  navigation.navigate('Home')
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
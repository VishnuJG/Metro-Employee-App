import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useDimensions } from '@react-native-community/hooks';

export default function App() {

  const {lanscape}=useDimensions();
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    topPadding:lanscape?20:0,
  },
});

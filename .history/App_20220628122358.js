import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, useState} from 'react-native';
import { useDimensions } from '@react-native-community/hooks';


export default function App() {

  const {lanscape}=useDimensions();
  const [text, onChangeText] = useState("Useless Text");
  const [number, onChangeNumber] = useState(0);
  return (
    <View style={styles.container}>
      <T
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
});

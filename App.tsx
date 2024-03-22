import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Colors} from "react-native-ui-lib";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <Button label={'Press'} backgroundColor="#000000"/>
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
});

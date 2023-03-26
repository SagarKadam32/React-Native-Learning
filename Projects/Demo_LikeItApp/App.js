import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}></View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0CEE2',
  },
  body: {
    backgroundColor: '#EEEEEE',
    flex: 1
  }
});

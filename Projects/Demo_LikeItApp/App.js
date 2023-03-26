import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './components/header';
import Card from './components/card';

import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.body}>
        <Card image={require('./assets/pic-1.jpg')} liked={true} />
        <Card image={require('./assets/pic-2.jpg')} liked={false} />
        <Card image={require('./assets/pic-3.jpg')} liked={false} />
      </ScrollView>
      <StatusBar style="auto" />
    </SafeAreaView >
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

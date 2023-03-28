import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Home } from './screens/home';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#E1D5E7'
  },
});

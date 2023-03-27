import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Button } from './components/button';

export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Button title='Add a New Day' style={{ backgroundColor: 'purple' }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end',
  },
  safeContainer: {
    flex: 1,
    backgroundColor: 'purple'
  },
});

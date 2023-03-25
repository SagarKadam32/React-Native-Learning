import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.dummyText}>Another Text to Display</Text>
      <Text style = {styles.dummyText}>Hello New World!!!!!!!</Text>
      <Button title='Tap Me!' />
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

  dummyText: {
    margin:16, 
    padding:16,
    borderWidth:2, 
    borderColor:'blue',
  },
});

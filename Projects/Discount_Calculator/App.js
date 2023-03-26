import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ alignItems: 'center', marginTop: 40 }}>
        <Text style={{ fontSize: 22 }}>Discount Calculator</Text>
      </Text>
      <View style={{ marginHorizontal: 40, marginTop: 40, marginBottom: 20 }}>
        <Text style={{ marginBottom: 20 }}>Amount</Text>
        <TextInput style={styles.input} />
      </View>

      <View style={{ marginHorizontal: 40 }}>
        <Text style={{ marginBottom: 20 }}>Discount(%)</Text>
        <TextInput style={styles.input} />
      </View>
      <StatusBar style="auto" />

      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{ color: 'white' }}>Calculate</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>
        The Amount after Discount is: </Text>
      <Text style={styles.resultText}>
        20</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },

  input: {
    backgroundColor: 'white',
    paddingVertical: 20,
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    fontSize: 20
  },

  buttonStyle: {
    backgroundColor: 'blue',
    width: 80,
    height: 80,
    marginTop: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  resultText: {
    color: 'green',
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20
  }
});

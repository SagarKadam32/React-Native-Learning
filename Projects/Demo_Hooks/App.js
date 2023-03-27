import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  //const value = 20;
  const [value, setValue] = useState(20);
  const [value2, setValue2] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, marginBottom: 30 }}>Value : {value}</Text>
      <TouchableOpacity onPress={() => { setValue(value + 10) }}>
        <Text>Add 10 to value..</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 32, marginBottom: 30 }}>Value : {value2}</Text>
      <TouchableOpacity onPress={() => { setValue2(value2 + 10) }}>
        <Text>Add 10 to value..</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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

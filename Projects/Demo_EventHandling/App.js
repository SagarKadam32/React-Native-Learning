import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import React from 'react';

export default class App extends React.Component {
  state = { color: 'red' };

  onChangeHandler = (text) => {
    this.setState({ value: text });
  };

  handlerOnPress = () => this.setState({ color: 'blue' })

  render() {
    return (
      <View style={styles.container} >
        <Text>Open up App.js to start working on your app!</Text>
        <TextInput style={styles.input}
          onchangeText={this.onChangeHandler}
        />
        <Text style={{ marginTop: 20, color: this.state.color }}>{this.state.value}</Text>
        <TouchableOpacity onPress={this.handlerOnPress} >
          <Text style={{ marginTop: 20, color: this.state.color }}>Click Me</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    marginTop: 20,
    width: 100,
    backgroundColor: 'yellow',
    borderWidth: 2,
    borderColor: 'blue',
    width: 200,
  }
});

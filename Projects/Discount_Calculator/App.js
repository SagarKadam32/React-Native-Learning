import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default class App extends React.Component {

  state = { amount: 0, discount: 0, result: 0 }

  onAmountChange = (text) => { this.setState({ amount: text }) };
  onDiscountChange = (text) => { this.setState({ discount: text }) };
  onPressCalculate = () => this.setState({ result: this.state.amount * (this.state.discount / 100) });

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ alignItems: 'center', marginTop: 40 }}>
          <Text style={{ fontSize: 22 }}>Discount Calculator</Text>
        </Text>
        <View style={{ marginHorizontal: 40, marginTop: 40, marginBottom: 20 }}>
          <Text style={{ marginBottom: 20 }}>Amount</Text>
          <TextInput style={styles.input} onChangeText={this.onAmountChange} />
        </View>

        <View style={{ marginHorizontal: 40 }}>
          <Text style={{ marginBottom: 20 }}>Discount(%)</Text>
          <TextInput style={styles.input} onChangeText={this.onDiscountChange} />
        </View>
        <StatusBar style="auto" />

        <View style={{ alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={this.onPressCalculate}
          >
            <Text style={{ color: 'white' }}>Calculate</Text>
          </TouchableOpacity>
        </View>

        <Text style={[styles.resultText, { color: this.state.result > 0 ? 'green' : 'black' }]}>
          The Amount after Discount is: </Text>
        <Text style={[styles.resultText, { color: this.state.result > 0 ? 'green' : 'black' }]}>
          {this.state.amount - this.state.result}</Text>
      </SafeAreaView >
    );
  }
};

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
    fontSize: 16
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
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20
  }
});

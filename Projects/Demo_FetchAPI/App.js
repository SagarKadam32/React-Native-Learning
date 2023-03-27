import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

class App extends React.Component {

  componentDidMount() {
    /** Basic Fetch API JS Call */
    this.fetchRequest();

    /** Async Await Fetch API Call */
    //this.fetchRequestUsingAysnc();
  }

  /** Basic Fetch API JS Call */
  fetchRequest = () => {
    const api = 'https://jsonplaceholder.typicode.com/todos/1'
    fetch(api)
      .then((response) =>
        response.json().then((data) => console.log(data)))
      .catch((err) => { console.log(err) });
  };

  /** Async Await Fetch API Call */
  fetchRequestUsingAysnc = async () => {
    const api = 'https://jsonplaceholder.typicode.com/todos/1'

    const response = await fetch(api);
    const body = await response.json();
    console.log(body);

  }




  render() {
    return (
      <View style={styles.container} >
        <Text>Open up App.js to start working on your app!</Text>
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
});

export default App;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

class App extends React.Component {

  componentDidUpdate() {
    this.fetchRequest();
  }

  fetchRequest = () => {
    const api = 'https://api.themoviedb.org/3/movie/popular?api_key=33c2b018c41ac61aa087e57644ba423b&language=en-US&page=1';
    //const res = fetch(api);
    fetch(api)
      .then((response) =>
        response.json().then((data) => console.log(data)))
      .catch((err) => { console.log(err) });
  };

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
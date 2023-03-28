import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React from 'react';

class App extends React.Component {

  state = { body: [] }

  componentDidMount() {
    /** Basic Fetch API JS Call */
    //this.fetchRequest();

    /** Async Await Fetch API Call */
    this.fetchRequestUsingAysnc();
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
    const api = 'https://jsonplaceholder.typicode.com/posts';

    const response = await fetch(api);
    const body = await response.json();
    console.log(body);

    this.setState({ body });

  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          {this.state.body.map((el) => (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                padding: 10,
              }}
              key={el.id}
            >
              <Text style={{ flex: 1, width: 100 }}>Title : {el.title}</Text>
              <Text >Body : {el.body}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});

export default App;
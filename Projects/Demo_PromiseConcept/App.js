import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';


const data = [{ author: 'Sagar', title: 'Book No. 1' },
{ author: 'John', title: 'Book No. 2' },
{ author: 'Amar', title: 'Book No. 3' },
{ author: 'Akbar', title: 'Book No. 4' }];

class App extends React.Component {

  state = { data: [] };

  componentDidMount() {
    const dataProviderPromise = new Promise((resolve, reject) => {
      let noIssues = true;
      if (noIssues) {
        setTimeout(() => resolve(data), 3000)
      } else {
        reject('Error Inside the promise.')
      }
    });

    dataProviderPromise
      .then((res) => {
        console.log('Inside Then..');
        console.log(res);
        this.setState({ data: res });

      })
      .catch((err) => {
        console.log('Inside Catch');
        console.log(err)
      })
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.data.map((e1) => <View>
          <Text>Title: {e1.title}</Text>
          <Text>Author: {e1.author}</Text>
          <Text>**********************</Text>

        </View>)}
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

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


const data = [{ author: 'Sagar', title: 'Book No. 1' },
{ author: 'John', title: 'Book No. 2' },
{ author: 'Amar', title: 'Book No. 3' },
{ author: 'Akbar', title: 'Book No. 4' }];

export default function App() {

  const dataProviderPromise = new Promise((resolve, reject) => {
    let noIssues = true;
    if (noIssues) {
      resolve(data);
    } else {
      reject('Error Inside the promise.')
    }
  });

  dataProviderPromise
    .then((res) => { console.log('Inside Then..'); console.log(res) })
    .catch((err) => { console.log('Inside Catch'); console.log(err) })


  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
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

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goals!!'></TextInput>
        <Button title='Add Goal'/>
      </View>
      <View>
        <View>
          <Text>List of Goals</Text>
        </View>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding:50
  }
  
});

import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.container_two}>
        <View style={styles.view1Style}>
          <Text>Text-1</Text>
        </View>
        <View style={styles.view2Style}>
          <Text>Text-2</Text>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16
  },

  container_two: {
    flex: 1,
    flexDirection: 'row'
  },

  view1Style: {
    flex: 1,
    backgroundColor: 'yellow',
    width: 80,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'



  },
  view2Style: {
    flex: 1,
    backgroundColor: 'orange',
    width: 80,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }


  /*
  inputContainer: {
    //flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    //borderBottomWidth: 1,
    //borderBottomColor: '#CCCCCC'

  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8

  },
  goalsContainer: {
    // flex: 0.5
    marginTop: 4
  }*/



});

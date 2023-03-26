import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [enteredGoalText, setEnteredGoalText] = useState('');
  
  function goalInputHandler(enteredText) {
    //console.log(enteredText);
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    console.log(enteredGoalText);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput  placeholder='Your course goals!!' 
                    style={styles.textInput}
                    onChangeText={goalInputHandler}>
                    
        </TextInput>
        <Button title='Add Goal'
                onPress={addGoalHandler }
        />
      </View>
      <View>
        <View style={styles.goalsContainer}>
          <Text>List of Goals</Text>
        </View>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    //flex: 1,
    paddingTop:50,
    paddingHorizontal:16
  },
  inputContainer: {
    //flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    //borderBottomWidth: 1,
    //borderBottomColor: '#CCCCCC'

  },
  textInput:{
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '70%',
    marginRight: 8,
    padding: 8

  },
  goalsContainer:{
   // flex: 0.5
   marginTop: 4
  }
  
});

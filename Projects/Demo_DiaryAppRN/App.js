import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { Home } from './screens/home';
import { AddDiary } from './screens/addDiary';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { theme } from "./constants/theme";


const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen
            name='Home'
            component={Home}
            options={{
              title: 'Diary',
              headerStyle: {
                backgroundColor: theme.primary_color,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
          <Stack.Screen
            name='addDiary'
            component={AddDiary}
            options={{
              title: 'Add Diary',
              headerStyle: {
                backgroundColor: theme.primary_color,
              },
              headerTintColor: 'black',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: theme.primary_color
  },
});

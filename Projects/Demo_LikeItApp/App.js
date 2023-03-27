import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from './components/header';
import Card from './components/card';
import React from 'react';

import { FontAwesome } from '@expo/vector-icons';

const data = [
  { image: require('./assets/pic-1.jpg'), id: 1, liked: false },
  //{ image: require('./assets/pic-2.jpg'), id: 2, liked: false },
  { image: require('./assets/pic-3.jpg'), id: 3, liked: false },

]

class App extends React.Component {
  state = {}

  onPicLike = () => { }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header />
        <ScrollView style={styles.body}>
          {data.map((item => <Card image={item.image} id={item.id} liked={item.liked} />))}


        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0CEE2',
  },
  body: {
    backgroundColor: '#EEEEEE',
    flex: 1
  }

});

export default App;

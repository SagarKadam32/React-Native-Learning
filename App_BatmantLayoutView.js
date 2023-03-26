import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView } from 'react-native';
import { useState } from 'react';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.avatarContainer}>
        <View style={{
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Image style={{ marginBottom: 20 }} source={require('./assets/batman-avatar.png')} />
          <Text style={{ maxWidth: 200 }}>Hi, My name is Batmant. How are you? Today is Sunday. There are 7 days in a week. This is very long text to type.</Text>
        </View>

      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.item}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.data}>Sagar Kadam</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>City:</Text>
          <Text style={styles.data}>Mumbai</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Fav. Color:</Text>
          <Text style={styles.data}>Blue</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>Goal:</Text>
          <Text style={styles.data}>Conqure RN</Text>
        </View>


      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#ccc',
  },

  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.4,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  detailsContainer: {
    backgroundColor: 'white',
    flex: 0.6
  },

  item: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 0.25,
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center'
  },

  label: {
    flex: 0.9,
    color: 'orange',
    fontSize: 32
  },

  data: {
    fontSize: 32
  }
});

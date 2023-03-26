import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import Header from './components/header';
import { FontAwesome } from '@expo/vector-icons';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <View style={styles.body}>
        <View style={styles.card}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image
              source={require('./assets/pic-1.jpg')}
              style={{ width: 260, height: 180, resizeMode: 'contain', borderRadius: 20 }}
            />
          </View>
          <View style={styles.footer}>
            <Text style={[{ flex: 1 }, styles.actionButton]}>Comment</Text>
            <Text style={[styles.actionButton, { marginRight: 5 }]}>Like</Text>
            <FontAwesome name="heart" size={16} color="red" />


          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0CEE2',
  },
  body: {
    backgroundColor: '#EEEEEE',
    flex: 1
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 5
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    maxHeight: 250,
    marginHorizontal: 20,
    borderRadius: 20,
    marginVertical: 30,
    padding: 20
  },

  actionButton: {
    fontSize: 16
  }
});

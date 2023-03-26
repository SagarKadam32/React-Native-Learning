import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.headerView}>
            <Text style={{ flex: 1, fontSize: 24 }}>Like It!</Text>
            <Text style={{ fontSize: 24 }}>0</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    headerView: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        backgroundColor: '#D0CEE2',
        paddingHorizontal: 20,
        paddingVertical: 5

    }
});

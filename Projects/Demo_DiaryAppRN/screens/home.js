import React from "react";
import { Button } from '../components/button';
import { StyleSheet, View, Text } from 'react-native';


export class Home extends React.Component {
    render() {
        return <View style={styles.home}>
            <View style={styles.content}>
                <Text style={styles.placeholder}>No Diaries Yet!</Text>
            </View>
            <Button title='Add a New Day' style={{ backgroundColor: 'purple' }} />
        </View>
    }
}


const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeholder: {
        fontSize: 24,
        color: 'lightgrey'
    },
});


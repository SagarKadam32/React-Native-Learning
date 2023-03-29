import React from "react";
import { Button } from '../components/button';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { theme } from "../constants/theme";
import { ListItem } from "../components/listItem";


export class AddDiary extends React.Component {
    render() {
        return <View style={styles.container}>
            <View style={[styles.group, { flex: 1 }]}>
                <Text style={styles.label}>Title</Text>
                <TextInput placeholder='Example' style={styles.title_input} />

                <Text style={styles.label}>Body</Text>
                <TextInput placeholder='Example' style={[styles.title_input, { height: 300 }]} multiline />
            </View>
            <Button title='Submit' />
        </View >
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20
    },
    label: {
        fontSize: 24,
        marginLeft: 20,
        marginTop: 10
    },
    title_input: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        borderWidth: 1,
        marginHorizontal: 10,
        marginVertical: 10,

        borderColor: 'grey'
    },
    group: {

    }
});


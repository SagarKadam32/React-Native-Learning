import React, { useState } from "react";
import { Button } from '../components/button';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import { theme } from "../constants/theme";
import { ListItem } from "../components/listItem";
import { Storage } from '../utils/storage';


export const AddDiary = ({ navigation }) => {

    const [title, setTitle] = useState();
    const [body, setBody] = useState();

    const submit = async () => {
        const created = new Date().getTime();
        const diary = { title, body, created };
        const all_items = (await Storage.getItem('diaries')) || [];
        const updated_diaries = [...all_items, diary];
        await Storage.setItem('diaries', updated_diaries);
        navigation.goBack();
    }

    return <View style={styles.container}>
        <View style={[styles.group, { flex: 1 }]}>
            <Text style={styles.label}>Title</Text>
            <TextInput placeholder='Example'
                style={styles.title_input}
                onChangeText={setTitle}
                value={title} />

            <Text style={styles.label}>Body</Text>
            <TextInput placeholder='Example'
                style={[styles.title_input, { height: 300 }]}
                onChangeText={setBody}
                value={body}
                multiline />
        </View>
        <Button title='Submit'
            onPress={submit} />
    </View >
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


import React from "react";
import { Button } from '../components/button';
import { StyleSheet, View, Text } from 'react-native';
import { theme } from "../constants/theme";
import { ListItem } from "../components/listItem";


export class Home extends React.Component {
    render() {
        return <View style={styles.home}>
            {/* <View style={styles.placeholder_container}>
               <Text style={styles.placeholder}>No Diaries Yet!</Text>  
            </View> */}
            <View style={styles.body}>
                <ListItem title='Day to Remember' subTitle='28-03-2023' style={{ borderTopWidth: 1 }} />
                <ListItem title='Lake Day' subTitle='28-03-2023' />
                <ListItem title='My Birthday' subTitle='28-03-2023' />

            </View>
            <Button title='Add a New Day' style={{ backgroundColor: theme.primary_color }} />
        </View >
    }
}


const styles = StyleSheet.create({
    home: {
        flex: 1,
        backgroundColor: '#fff'
    },
    body: {
        flex: 1,
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


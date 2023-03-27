import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export const Button = ({ title }) => {
    return (
        <TouchableOpacity style={styles.btn} activeOpacity={1} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'purple',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20

    },
    title: {
        fontSize: 24
    }
})
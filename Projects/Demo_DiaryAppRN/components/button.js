import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


export const Button = ({ title, style }) => {
    return (
        <TouchableOpacity style={[styles.btn, style]} >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity >
    );
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 24
    }
})
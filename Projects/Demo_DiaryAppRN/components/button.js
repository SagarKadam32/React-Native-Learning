import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from "../constants/theme";



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
        borderTopWidth: 1,
        borderColor: theme.primary_color_dark
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
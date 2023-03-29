import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from "../constants/theme";



export const Button = ({ title, style, onPress }) => {
    return (
        <TouchableOpacity style={[styles.btn, style]} onPress={onPress} >
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
        borderColor: theme.primary_color_dark,
        backgroundColor: theme.primary_color
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})
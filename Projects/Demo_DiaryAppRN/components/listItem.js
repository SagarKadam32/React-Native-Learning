import react from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';

export const ListItem = ({ title, subtitle, onPress, style }) => {
    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{subtitle}</Text>
            </View>
            <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
        alignItems: "center",
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    subtitle: {
        color: "grey",
        fontStyle: "italic",
        marginTop: 5,
    },
});

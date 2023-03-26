import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Card({ image, liked }) {
    return (
        <View style={styles.card}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={image}
                    style={{ width: 260, height: 180, resizeMode: 'contain', borderRadius: 20 }}
                />
            </View>
            <View style={styles.footer}>
                <Text style={[{ flex: 1 }, styles.actionButton]}>Comment</Text>
                <Text style={[styles.actionButton, { marginRight: 5 }]}>Like</Text>
                <FontAwesome name="heart" size={16} color={liked ? 'red' : 'grey'} />


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        padding: 5
    },
    card: {
        backgroundColor: 'white',
        height: 250,
        marginHorizontal: 20,
        borderRadius: 20,
        marginVertical: 30,
        padding: 20
    },
    actionButton: {
        fontSize: 16
    }
});

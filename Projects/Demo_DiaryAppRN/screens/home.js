import React from "react";
import { Button } from '../components/button';
import { StyleSheet, View, ScrollView, RefreshControl, Text } from 'react-native';
import { theme } from "../constants/theme";
import { ListItem } from "../components/listItem";
import { Storage } from '../utils/storage';


export class Home extends React.Component {
    state = {
        refreshing: false,
        diaries: []
    };

    onRefresh = async () => {
        this.setState({ refreshing: true })
        const diaries = (await Storage.getItem('diaries')) || [];
        this.setState({ diaries });
        this.setState({ refreshing: false })


    };

    render() {
        const { diaries } = this.state

        return <View style={styles.home}>
            <ScrollView style={styles.body}
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}>
                {diaries.length ? (
                    diaries.map((diary, index) => {
                        return (
                            <ListItem
                                title={diary.title}
                                subtitle={new Date(diary.created).toDateString()}
                                style={{ borderTopWidth: 1 }}
                                key={diary.created + index + diary.title}
                                onPress={() => this.itemPressedHandler(diary)}
                            />
                        );
                    })
                ) : (
                    <View style={styles.placeholdere_container}>
                        <Text style={styles.placeholder}>No Diaries Yet!</Text>
                    </View>
                )}
            </ScrollView>

            <Button title='Add a New Day'
                onPress={() => { this.props.navigation.navigate('addDiary') }} />
        </View>
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


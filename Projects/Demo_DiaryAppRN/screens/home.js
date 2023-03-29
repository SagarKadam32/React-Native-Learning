import React from "react";
import { Button } from '../components/button';
import { StyleSheet, View, ScrollView, RefreshControl, Text } from 'react-native';
import { theme } from "../constants/theme";
import { ListItem } from "../components/listItem";


export class Home extends React.Component {
    state = {
        refreshing: false
    };

    onRefresh = async () => {
        this.setState({ refreshing: true })
        const diary = await AsyncStorage.getItem('diary');
        this.setState({ diary })

    };

    render() {
        return <View style={styles.home}>
            {/* <View style={styles.placeholder_container}>
               <Text style={styles.placeholder}>No Diaries Yet!</Text>  
            </View> */}
            <ScrollView style={styles.body}
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />}>

                    {this.state.diary ?(
                <ListItem title={this.state.diary.title}
                subTitle='28-03-2023'
                style={{ borderTopWidth: 1 }} />): 
                <View style={styles.placeholder_container}>
                    <Text style={styles.placeholder}>No Diaries Yet!</Text>  
                </View>
                    }

                


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


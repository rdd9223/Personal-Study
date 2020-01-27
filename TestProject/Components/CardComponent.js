import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default class CardCompnent extends Component{
    render() {
        return (
            <View style={style.container}>
                <Text>CardCompnent</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
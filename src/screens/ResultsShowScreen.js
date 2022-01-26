import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
    const id = navigation.getParam('id');

    return (
        <View>
            <Text>Results Show ${id}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
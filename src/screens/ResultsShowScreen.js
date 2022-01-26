import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, FlatList } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null);
    const id = navigation.getParam('id');

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (!result) {
        return null;
    }

    return (
        <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>{result.name} </Text>
            <FlatList
                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({ item }) => {
                    return <Image style={styles.imageStyle} source={{ uri: item }}/>
                }}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    viewStyle: {
        alignItems: 'center'
    },
    imageStyle: {
        width: 300,
        height: 200,
        borderRadius: 5,
        marginBottom: 4
    },
    titleStyle: {
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10
    }
});

export default ResultsShowScreen;
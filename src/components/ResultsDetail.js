import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ResultsList from './ResultsList';

const ResultsDetail = ({ result }) => {
    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
            <Text style={styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle: {
        width: 255,
        height: 125,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
    }
});

export default ResultsDetail;
import React from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput style={styles.inputStyle} placeholder='Search' />
        </View>
    );
};



const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#DFDFDF',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 15,
        flexDirection: 'row'
    }, 
    inputStyle: {
        flex: 1,
        paddingLeft: 2,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 10
    }
});

export default SearchBar;
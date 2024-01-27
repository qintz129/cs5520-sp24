import React from 'react';
import { View, StyleSheet, } from 'react-native'; 
import colors from './colors';

const Card = ({ children }) => {
    return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 10,
        backgroundColor: colors.grey,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: colors.black,
        shadowOpacity: 0.5,
        shadowRadius: 10,
        marginHorizontal: 5,
        marginVertical: 5,
        padding: 20,   
        width: "80%"
    },
});

export default Card;
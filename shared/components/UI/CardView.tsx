import React from 'react';
import {Image, StyleSheet, View} from "react-native";

const CardView = () => {
    return (
        <View style={styles.card}>
            <Image source={require('../../../assets/rest.png')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        // width: 148,
        // height: 200,
        backgroundColor: '#31E981',
        borderRadius: 16
    }
})

export default CardView;
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import Navigator from "./Navigator";
import React from "react";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Navigator/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight, // учитываем высоту статус-бара
        backgroundColor: '#fff',
    },
});

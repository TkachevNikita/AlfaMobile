import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import Constants from 'expo-constants';
import Navigator from "./Navigator";
import React from "react";
import {Provider} from "react-redux";
import {store} from "./core/store/store";

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <Navigator/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#fff',
    },
});

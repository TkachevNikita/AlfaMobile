import React, {FC} from 'react';
import {StyleSheet, View} from "react-native";
import SearchInputView from "../UI/SearchInputView";

const HomePageComponent: FC = () => {
    return (
        <View style={styles.container}>
            <SearchInputView/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 60,
        backgroundColor: '#EBF3E7'
    }
})

export default HomePageComponent;
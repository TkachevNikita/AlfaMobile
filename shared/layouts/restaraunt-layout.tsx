import React, {ReactNode} from 'react';
import {ScrollView, StyleSheet, View} from "react-native";
import NavigationView from "../components/UI/NavigationView";

interface RestaurantLayoutProps {
    children: ReactNode
}

const RestaurantLayout = ({children}: RestaurantLayoutProps) => {
    return (
        <View style={styles.page}>
            <View style={styles.page__container}>
                <View>
                    {children}
                </View>
            </View>
            <NavigationView/>
        </View>
    );
};

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#EBF3E7',
    },
    page__container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
    },
})

export default RestaurantLayout;
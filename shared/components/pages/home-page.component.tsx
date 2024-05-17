import React from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import SearchInputView from "../UI/SearchInputView";
import NavigationView from "../UI/NavigationView";
import {restaurants} from "../../mockdata/mockRest";
import {IRestaurant} from "../../../core/intrefaces/IRestaurant";
import RestaurantPreview from "../RestaurantPreview";

const HomePageComponent: React.FC = () => {

    return (
        <View style={styles.home}>
            <View style={styles.container}>
                <SearchInputView />
                <Text style={styles.restaurant__title}>
                    Рестораны
                </Text>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.restaurant__container}>
                        {restaurants.map((restaurant: IRestaurant) =>
                            <RestaurantPreview key={restaurant.id} restaurant={restaurant}/>
                        )}
                    </View>
                </ScrollView>
            </View>
            <NavigationView />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        gap: 20,
    },
    restaurant__container: {
        gap: 20
    },
    home: {
        flex: 1,
        backgroundColor: '#EBF3E7',
    },
    buttonContainer: {
        marginBottom: 130
    },
    restaurant__title: {
        fontWeight: '700',
        fontSize: 28
    }
});

export default HomePageComponent;

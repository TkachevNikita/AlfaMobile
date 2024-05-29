import React, {useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from "react-native";
import SearchInputView from "../UI/SearchInputView";
import NavigationView from "../UI/NavigationView";
import {IRestaurant} from "../../../core/intrefaces/IRestaurant";
import RestaurantPreview from "../RestaurantPreview";
import {useAppDispatch, useAppSelector} from "../../../core/store/hooks";
import {fetchRestaurants} from "../../../core/store/slices/restaurantSlice";

const HomePageComponent: React.FC = () => {

    const dispatch = useAppDispatch();
    const restaurants = useAppSelector((state) => state.restaurants.restaurants);

    useEffect(() => {
        dispatch(fetchRestaurants());
    }, [dispatch]);

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

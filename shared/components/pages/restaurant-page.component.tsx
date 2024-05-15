import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import SearchInputView from "../UI/SearchInputView";
import Slider from "../UI/Slider";
import CardView from "../UI/CardView";
import ButtonView from "../UI/ButtonView";
import NavigationView from "../UI/NavigationView";

const RestaurantPageComponent = () => {
    const navigation = useNavigation();


    return (
        <View style={styles.home}>
            <View style={styles.container}>
                <SearchInputView />
                <Slider />
                <View style={styles.cardContainer}>
                    <View style={styles.cardItem}>
                        <CardView />
                        <Text style={styles.cardText}>
                            В ресторане
                        </Text>
                    </View>
                    <View style={styles.cardItem}>
                        <CardView />
                        <Text style={styles.cardText}>
                            Доставка
                        </Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonView onPress={() => navigation.navigate("Shake" as never)} title={"Выбрать блюдо"} variant={'accent'} />
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
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 20
    },
    home: {
        flex: 1,
        backgroundColor: '#EBF3E7',
    },
    buttonContainer: {
        marginBottom: 130
    },
    cardItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10
    },
    cardText: {
        fontSize: 12,
        fontWeight: '700',
        color: '#0E7F3D'
    }
});

export default RestaurantPageComponent;
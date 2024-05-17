import React from 'react';
import {StyleSheet, View, Image, Text} from "react-native";
import {IFood} from "../../../core/intrefaces/IFood";

interface FoodCardViewProps {
    food: IFood
}

const FoodCardView: React.FC<FoodCardViewProps> = ({food}) => {
    return (
        <View style={styles.card}>
            <Image
                source={{uri: food.image}}
                style={{width: '100%', height: 100, borderRadius: 16}}
            />
            <Text style={styles.card__price}>
                {food.price}
            </Text>
            <Text style={styles.card__title}>
                {food.title}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '45%',
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 16
    },
    card__price: {
        fontSize: 12,
        fontWeight: '600',
    },
    card__title: {
        fontSize: 12,
    }
})

export default FoodCardView;
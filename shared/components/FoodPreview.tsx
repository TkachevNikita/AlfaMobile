import React from 'react';
import {Image, View, Text, StyleSheet} from "react-native";
import {IFood} from "../../core/intrefaces/IFood";
import ButtonView from "./UI/ButtonView";

interface FoodPreviewProps {
    food: IFood;
}

const FoodPreview: React.FC<FoodPreviewProps> = ({food}) => {
    return (
        <View>
            <Image style={styles.food__image} source={require('../../assets/food.png')}/>
            <Text style={styles.food__title}>{food.title}</Text>
            <View style={styles.description}>
                <Text style={styles.description__title}>Состав:</Text>
                <Text>{food.composition}</Text>
            </View>
            <View style={styles.description}>
                <Text style={styles.description__title}>Цена:</Text>
                <Text>{food.price}</Text>
            </View>
            <ButtonView title={'В корзину'} variant={'accent'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    food__title: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10
    },
    food__image: {
        alignSelf: 'center',
        marginVertical: 20
    },
    description: {
        marginBottom: 15
    },
    description__title: {
        fontWeight: '600'
    }
})

export default FoodPreview;
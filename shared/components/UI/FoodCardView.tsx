import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Image, Text} from "react-native";
import {IFood} from "../../../core/intrefaces/IFood";
import Svg, {Path} from "react-native-svg";
import IconButtonView from "./IconButtonView";
import {useAppDispatch, useAppSelector} from "../../../core/store/hooks";
import {fetchBasket, orderAddToBasket, removeFromBasket} from "../../../core/store/slices/orderSlice";
import {OrderService} from "../../../core/services/orderService";

interface FoodCardViewProps {
    food: IFood
    offer: {
        price: number;
        currency: string;
    }
}

const FoodCardView: React.FC<FoodCardViewProps> = ({food, offer}) => {
    const dispatch = useAppDispatch();
    const [existingCount, setExistingCount] = useState<number>(0);
    const basket: IFood[] = useAppSelector((state) => state.order.basket);

    const addToBasket = (item: IFood): void => {
        dispatch(orderAddToBasket(item));
    };

    const removeItem = (id: string): void => {
        dispatch(removeFromBasket(id));
    };

    return (
        <View style={styles.card}>
            <Image
                source={{uri: food.images[0] ? food.images[0].replace('h={height}&w={width}', '') : ''}}
                style={{width: '100%', height: 100, borderRadius: 16}}
            />
            <Text style={styles.card__price}>
                {offer.price} {offer.currency}
            </Text>
            <Text style={styles.card__title}>
                {food.name}
            </Text>
            <View style={styles.card__action}>
                {/*<IconButtonView onPress={() => removeItem(food.id!)}>*/}
                {/*    <Svg viewBox="0 0 24 24" fill="none" width={20} height={20}>*/}
                {/*        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>*/}
                {/*        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>*/}
                {/*        <g id="SVGRepo_iconCarrier">*/}
                {/*            <Path d="M6 12L18 12" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"*/}
                {/*                  strokeLinejoin="round"></Path>*/}
                {/*        </g>*/}
                {/*    </Svg>*/}
                {/*</IconButtonView>*/}
                {/*<Text>*/}
                {/*    {1}*/}
                {/*</Text>*/}
                <IconButtonView onPress={() => addToBasket(food)}>
                    <Svg viewBox="0 0 24 24" fill="none" width={20} height={20}>
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <Path d="M4 12H20M12 4V20" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"></Path>
                        </g>
                    </Svg>
                </IconButtonView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '45%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 16,
    },
    card__price: {
        fontSize: 12,
        fontWeight: '600',
    },
    card__title: {
        fontSize: 12,
        marginBottom: 20
    },
    card__action: {
        alignSelf: 'flex-end',
        marginTop: 'auto',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
    }
})

export default FoodCardView;
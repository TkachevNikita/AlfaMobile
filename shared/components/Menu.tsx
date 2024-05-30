import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import {useAppSelector} from "../../core/store/hooks";
import {IMenu} from "../../core/intrefaces/IMenu";
import FoodCardView from "./UI/FoodCardView";

interface RestaurantMenu {
    menu: IMenu[];
}

const Menu: React.FC<RestaurantMenu> = ({ menu }) => {
    const [selectedCategory, setSelectedCategory] = useState<string>();

    useEffect(() => {
        setSelectedCategory(menu[0]?.category); // Set the name of the first category
    }, [menu[0]]);

    const handleCategoryPress = (category: string) => {
        setSelectedCategory(category);
    };

    const renderCategoryButton = ({ item }: any) => (
        <TouchableOpacity
            style={[styles.categoryButton, selectedCategory === item.category && styles.selectedCategory]}
            onPress={() => handleCategoryPress(item.category)}
        >
            <Text style={styles.categoryButtonText}>{item.category}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={menu}
                renderItem={renderCategoryButton}
                keyExtractor={(item) => item?.category}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View style={{flexDirection: 'row', gap: 15, flexWrap: 'wrap', justifyContent: 'center'}}>
                {
                    menu.find(cat => cat?.category === selectedCategory) ?

                    menu.find(cat => cat?.category === selectedCategory)!.items.map((menuItem) => {
                        return (
                            <FoodCardView key={menuItem.product.id} food={menuItem.product} offer={menuItem.offer}/>
                        )
                    }) : <></>
                }
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        gap: 20
    },
    categories: {
        flexDirection: 'row',
        padding: 10,
    },
    categoryButton: {
        padding: 10,
        marginRight: 10,
        borderRadius: 5,
    },
    selectedCategory: {
        backgroundColor: '#ddd',
    },
    categoryButtonText: {
        fontWeight: 'bold',
    },
});

export default Menu;

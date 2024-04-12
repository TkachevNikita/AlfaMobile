import React, {FC} from 'react';
import {StyleSheet, View, Text} from "react-native";
import SearchInputView from "../UI/SearchInputView";
import Slider from "../UI/Slider";
import CardView from "../UI/CardView";
import ButtonView from "../UI/ButtonView";
import NavigationView from "../UI/NavigationView";

const HomePageComponent: FC = () => {
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
                <ButtonView title={"Выбрать ресторан"} variant={'accent'} />
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
        backgroundColor: '#EBF3E7',
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between"
    },
    home: {
        flex: 1,
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

export default HomePageComponent;

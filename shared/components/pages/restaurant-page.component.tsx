import React, {useEffect} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, View} from "react-native";
import {RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import ButtonView from "../UI/ButtonView";
import NavigationView from "../UI/NavigationView";
import {IRestaurant} from "../../../core/intrefaces/IRestaurant";
import ChipView from "../UI/ChipView";
import Svg, {Path} from "react-native-svg";
import {useAppDispatch, useAppSelector} from "../../../core/store/hooks";
import {fetchMenu} from "../../../core/store/slices/menuSlice";
import Menu from "../Menu";

type RootStackParamList = {
    Restaurant: { restaurant: IRestaurant };
};

type RestaurantScreenRouteProp = RouteProp<RootStackParamList, 'Restaurant'>;

const RestaurantPageComponent = () => {
    const navigation = useNavigation();
    const route = useRoute<RestaurantScreenRouteProp>();
    const restaurant = route.params.restaurant;
    const dispatch = useAppDispatch();
    const menu = useAppSelector((state) => state.menu.menu);

    useEffect(() => {
        if (restaurant) {
            dispatch(fetchMenu(restaurant.id));
        }

    }, [dispatch])

    return (
        <>
            <ScrollView>
                <View style={styles.home}>
                    <View style={styles.hero}>
                        <View style={styles.hero__container}>
                            <Text style={styles.title}>
                                {restaurant.title}
                            </Text>
                            <View style={styles.hero__details}>
                                <ChipView>
                                    <Text>
                                        25-40 мин.
                                    </Text>
                                </ChipView>
                                <ChipView>
                                    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                        <Path
                                            d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z"
                                            fill={restaurant.reviews.generalRating > 4 ? 'green' : 'orange'}
                                        />
                                    </Svg>
                                    <Text>
                                        {restaurant.reviews.generalRating}
                                    </Text>
                                </ChipView>
                            </View>
                        </View>
                        <ImageBackground
                            source={{uri: restaurant.externalContent[0].mainPhotoUrl}}
                            style={{ width: '100%', height: 250 }}
                        >
                            <View style={styles.child} />
                        </ImageBackground>
                    </View>
                    <View style={styles.container}>
                        <ButtonView onPress={() => navigation.navigate('Shake' as never)} title={'Предложи блюдо'} variant={'accent'}/>
                        <Menu menu={menu}/>
                    </View>
                </View>
            </ScrollView>
            <NavigationView/>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 20,
    },
    child: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
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
    },
    hero: {
        width: '100%',
        position: 'relative',
        backgroundColor: 'black'
    },
    title: {
        fontWeight: '800',
        fontSize: 32,
        color: 'white',

    },
    hero__container: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        zIndex: 1000,
    },
    hero__details: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 20
    }
});

export default RestaurantPageComponent;
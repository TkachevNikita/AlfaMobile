import React, { useEffect, useState, useRef } from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import {ShakeEventExpo} from "../../utils/ShakeEventExpo";
import NavigationView from "../UI/NavigationView";
import RestarauntLayout from "../../layouts/restaraunt-layout";
import CustomModal from "../UI/ModalView";
import FoodPreview from "../FoodPreview";
import {foods} from "../../mockdata/mockFood";

interface ShakePageComponentProps {}

const ShakePageComponent: React.FC<ShakePageComponentProps> = () => {
    const [test, setTest] = useState(false);

    useEffect(() => {
        ShakeEventExpo.addListener(() => {
            setTest(true);
        });

        return () => ShakeEventExpo.removeListener();
    }, []);

    const closePopup = () => {
        setTest(false);
    }

    return (
        <RestarauntLayout>
            <View style={styles.shake__container}>
                <Image source={require('../../../assets/sad-animal.png')}/>
                <Text style={styles.shake__text}>
                    Потряси меня...
                </Text>
            </View>
            <CustomModal visible={test} onClose={closePopup}>
                <FoodPreview food={foods[Math.floor(Math.random() * (foods.length - 1))]}/>
            </CustomModal>
        </RestarauntLayout>
    );
};

const styles = StyleSheet.create({
    shake: {
        flex: 1,
        backgroundColor: '#EBF3E7',
    },
    shake__container: {
        gap: 15,
        alignItems: 'center'
    },
    shake__text: {
        fontSize: 20,
        fontWeight: '600',
        color: '#0E7F3D'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 60,
    }
})

export default ShakePageComponent;

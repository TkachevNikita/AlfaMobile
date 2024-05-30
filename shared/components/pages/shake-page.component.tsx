import React, { useEffect, useState, useRef } from 'react';
import {View, Text, StyleSheet, Image} from "react-native";
import {ShakeEventExpo} from "../../utils/ShakeEventExpo";
import NavigationView from "../UI/NavigationView";
import RestarauntLayout from "../../layouts/restaraunt-layout";
import CustomModal from "../UI/ModalView";
import FoodPreview from "../FoodPreview";
import {foods} from "../../mockdata/mockFood";
import {useAppSelector} from "../../../core/store/hooks";
import {IMenu} from "../../../core/intrefaces/IMenu";

interface ShakePageComponentProps {}

const ShakePageComponent: React.FC<ShakePageComponentProps> = () => {
    const [test, setTest] = useState(false);
    const [randomMenu, setRandomMenu] = useState<any>();
    const menu = useAppSelector((state) => state.menu.menu);

    useEffect(() => {
        ShakeEventExpo.addListener(() => {
            setTest(true);
            setRandomMenu(menu[0].items[Math.floor(Math.random() * (menu[0].items.length - 1))])
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
                <FoodPreview
                    food={randomMenu?.product}
                    offer={randomMenu?.offer}
                />
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

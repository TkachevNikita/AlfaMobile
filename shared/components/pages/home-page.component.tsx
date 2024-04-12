import {View, Text, StyleSheet, Image} from "react-native";
import ButtonView from "../UI/ButtonView";

const HomePageComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.homeDescription}>
                <View style={styles.homeLogo}>
                    <Image source={require('../../../assets/animal.png')}/>
                </View>
                <Text style={styles.homeTitle}>
                    Привет
                </Text>
                <Text style={styles.homeText}>
                    Приветственные слова
                    или коротко о сервисе
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonView variant="primary" title="Продолжить"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 60,
        backgroundColor: 'rgba(49, 233, 129, 1)',
    },
    homeDescription: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    homeLogo: {
        marginBottom: 20,
    },
    homeTitle: {
        fontSize: 24,
        marginBottom: 10,
        color: '#FFF',
        fontWeight: '600'
    },
    homeText: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 21,
        textAlign: 'center',
        color: '#FFF',
        width: 170
    },
    buttonContainer: {
        marginBottom: 60,
    },
});

export default HomePageComponent;
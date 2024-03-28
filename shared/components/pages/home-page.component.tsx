import {View, Text, StyleSheet} from "react-native";
import ButtonView from "../UI/ButtonView";

const HomePageComponent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.homeLogo}>

            </View>
            <View style={styles.homeDescription}>
                <Text style={styles.homeTitle}>
                    Привет
                </Text>
                <Text style={styles.homeText}>
                    Приветственные слова
                    или коротко о сервисе
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonView variant="accent" title="Регистрация"/>
                <ButtonView variant="primary" title="Авторизация"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 60,
    },
    homeLogo: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: 'rgba(217, 217, 217, 1)'
    },
    homeTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    homeDescription: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    homeText: {
        width: 167,
        fontSize: 14,
        lineHeight: 21,
        textAlign: 'center'
    },
    buttonContainer: {
        flex: 1,
        gap: 15,
        justifyContent: 'flex-end'
    }
});

export default HomePageComponent;
import {View, Text, StyleSheet, Image} from "react-native";
import ButtonView from "../UI/ButtonView";
import {useNavigation} from "@react-navigation/native";

const WelcomePageComponent = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.welcomeDescription}>
                <View style={styles.welcomeLogo}>
                    <Image source={require('../../../assets/animal.png')}/>
                </View>
                <Text style={styles.welcomeTitle}>
                    Привет
                </Text>
                <Text style={styles.welcomeText}>
                    Приветственные слова
                    или коротко о сервисе
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonView onPress={() => navigation.navigate("Home" as never)} variant="primary" title="Продолжить"/>
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
    welcomeDescription: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeLogo: {
        marginBottom: 20,
    },
    welcomeTitle: {
        fontSize: 24,
        marginBottom: 10,
        color: '#FFF',
        fontWeight: '600'
    },
    welcomeText: {
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

export default WelcomePageComponent;
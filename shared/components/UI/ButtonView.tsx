import {Pressable, StyleSheet, Text} from "react-native";

interface ButtonViewProps {
    title: string,
    variant: 'accent' | 'primary'
}

const ButtonView = ({title, variant}: ButtonViewProps) => {
    const buttonStyles = {
        accent: styles.accent,
        primary: styles.primary,
    }[variant] || '';

    return (
        <Pressable style={[styles.button, buttonStyles]}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
};

const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 45,
        borderRadius: 50,
        alignSelf: 'center',
    },
    primary: {
        backgroundColor: 'rgba(251, 229, 130, 1)',
    },
    accent: {
        backgroundColor: '#000'
    },
    buttonText: {
        color: 'rgba(162, 66, 20, 1)',
        fontSize: 16,
        fontWeight: '700'
    }
});

export default ButtonView;
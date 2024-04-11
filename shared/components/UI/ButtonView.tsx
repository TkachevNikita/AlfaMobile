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
        padding: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    primary: {
        backgroundColor: 'rgba(0, 0, 0, 0.66)'
    },
    accent: {
        backgroundColor: '#000'
    },
    buttonText: {
        color: '#fff',
        fontSize: 14
    }
});

export default ButtonView;
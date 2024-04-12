import React from 'react';
import { GestureResponderEvent, Pressable, StyleSheet, Text } from 'react-native';

interface ButtonViewProps {
    title: string;
    variant: 'accent' | 'primary';
    onPress?: (event?: GestureResponderEvent) => void;
}

const ButtonView = ({ title, variant, onPress }: ButtonViewProps) => {
    const buttonStyles = {
        accent: [styles.accent, styles.buttonAccentText],
        primary: [styles.primary],
    }[variant] || '';

    return (
        <Pressable onPress={onPress} style={({ pressed }) => [styles.button, buttonStyles, { opacity: pressed ? 0.5 : 1 }]}>
            <Text style={buttonStyles}>{title}</Text>
        </Pressable>
    );
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
        backgroundColor: '#FF8F19',
    },
    buttonPrimaryText: {
        color: 'rgba(162, 66, 20, 1)',
        fontSize: 16,
        fontWeight: '700',
    },
    buttonAccentText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '700',
    },
});

export default ButtonView;

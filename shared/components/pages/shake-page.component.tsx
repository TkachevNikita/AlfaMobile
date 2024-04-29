import React, { useEffect, useState, useRef } from 'react';
import { View, Text, Alert } from "react-native";
import { Accelerometer } from "expo-sensors";

interface ShakePageComponentProps {}

const ShakePageComponent: React.FC<ShakePageComponentProps> = () => {
    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
    const shakeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const [test, setTest] = useState(false);

    useEffect(() => {
        const subscription = Accelerometer.addListener(setData);

        return () => subscription.remove();
    }, []);

    useEffect(() => {
        const shakeThreshold = 1.5;
        const shakeDuration = 2000;

        const isShaking = Math.abs(x) > shakeThreshold || Math.abs(y) > shakeThreshold || Math.abs(z) > shakeThreshold;

        if (isShaking) {
            if (shakeTimeoutRef.current === null) {
                shakeTimeoutRef.current = setTimeout(() => {
                    setTest(true);
                    // Alert.alert('Телефон трясется!', 'Обнаружена тряска телефона.');
                    shakeTimeoutRef.current = null;
                }, shakeDuration);
            }
        } else {
            if (shakeTimeoutRef.current !== null) {
                clearTimeout(shakeTimeoutRef.current);
                shakeTimeoutRef.current = null;
            }
        }
    }, [x, y, z]);

    return (
        <View>
            <Text>Координата X: {x}</Text>
            <Text>Координата Y: {y}</Text>
            <Text>Координата Z: {z}</Text>
            <Text>
                {
                    test ? <Text>{test}</Text> : <Text>Нее бро))</Text>
                }
            </Text>
        </View>
    );
};

export default ShakePageComponent;

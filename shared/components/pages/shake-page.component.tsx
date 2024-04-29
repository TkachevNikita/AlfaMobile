import React, { useEffect, useState, useRef } from 'react';
import { View, Text } from "react-native";
import {ShakeEventExpo} from "../../utils/ShakeEventExpo";

interface ShakePageComponentProps {}

const ShakePageComponent: React.FC<ShakePageComponentProps> = () => {
    const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
    const [test, setTest] = useState(false);

    useEffect(() => {
        ShakeEventExpo.addListener(() => {
            setTest(true);
        });

        return () => ShakeEventExpo.removeListener();
    }, []);

    return (
        <View>
            <Text>Координата X: {x}</Text>
            <Text>Координата Y: {y}</Text>
            <Text>Координата Z: {z}</Text>
            <Text>
                {
                    test ? <Text>Трясонул челик</Text> : <Text>Нее бро))</Text>
                }
            </Text>
        </View>
    );
};

export default ShakePageComponent;

import React, {ReactNode} from 'react';
import {GestureResponderEvent, TouchableOpacity} from "react-native";
import { StyleSheet } from "react-native";

interface IconButtonViewProps {
    children: ReactNode;
    onPress?: (event?: GestureResponderEvent) => void;
}

const IconButtonView: React.FC<IconButtonViewProps> = ({children, onPress}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            {children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
   button: {
       padding: 5,
       backgroundColor: 'rgba(49, 233, 129, 1)',
       borderRadius: 50
   }
});

export default IconButtonView;
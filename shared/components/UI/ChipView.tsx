import React, {ReactNode} from 'react';
import {StyleSheet, View} from "react-native";

interface ChipViewProps {
    children: ReactNode
}

const ChipView: React.FC<ChipViewProps> = ({children}) => {
    return (
        <View style={styles.chip}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    chip: {
        flexDirection: 'row',
        gap: 5,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 32
    }
})

export default ChipView;
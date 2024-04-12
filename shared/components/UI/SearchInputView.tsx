import {FC} from "react";
import {TextInput, TouchableOpacity, View, StyleSheet} from "react-native";
import Svg, { Path } from 'react-native-svg';

const SearchInputView: FC = () => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Поиск"
                placeholderTextColor={'#0E7F3D'}
            />
            <TouchableOpacity style={styles.searchIcon}>
                <Svg viewBox="0 0 24 24" width={20} height={20}>
                    <Path
                        fill="#0E7F3D"
                        d="M15.5,14H15.2l0.7-0.7C16.5,12.4,17,11.2,17,10c0-2.8-2.2-5-5-5S7,7.2,7,10s2.2,5,5,5 c1.2,0,2.4-0.5,3.3-1.4l0.7,0.7V15L21,19.2L19.2,21L15.5,17.3V14z M12,14c-2.2,0-4-1.8-4-4c0-2.2,1.8-4,4-4s4,1.8,4,4 C16,12.2,14.2,14,12,14z"
                    />
                </Svg>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row-reverse',
        alignItems: 'center',
        borderRadius: 14,
        padding: 5,
        backgroundColor: '#FFF'
    },
    input: {
        flex: 1,
        paddingHorizontal: 10,
        color: '#0E7F3D'
    },
    searchIcon: {
        padding: 5,
    },
});

export default SearchInputView;
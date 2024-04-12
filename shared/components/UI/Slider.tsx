import React, {useEffect, useState} from 'react';
import {FlatList, View, Image, StyleSheet} from "react-native";

const Slider = () => {
    const [slider, setSlider] = useState<string[]>([])

    useEffect(() => {
        getSliders();
    }, [])

    const getSliders = () => {
        setSlider([
            'https://sun9-56.userapi.com/impg/WxdyNykdT3wJxWkjeEqkgqeRgeVm-66G0_wdVQ/nFXVPi7A4DU.jpg?size=1024x728&quality=95&sign=833621ac55d0ad30b67cfc62f00f768e&c_uniq_tag=V7MS4c4--tmvuCBeo6oKxPuExXdpHmuyX0Nxku1fNlQ&type=album',
            'https://sun9-56.userapi.com/impg/WxdyNykdT3wJxWkjeEqkgqeRgeVm-66G0_wdVQ/nFXVPi7A4DU.jpg?size=1024x728&quality=95&sign=833621ac55d0ad30b67cfc62f00f768e&c_uniq_tag=V7MS4c4--tmvuCBeo6oKxPuExXdpHmuyX0Nxku1fNlQ&type=album',
        ])
    }

    return (
        <View>
            <FlatList
                data={slider}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
                renderItem={({item, index}) => (
                    <View style={{marginRight: 20}}>
                        <Image
                            source={{uri: item}}
                            style={styles.sliderImage}
                        />
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    sliderImage: {
        width: 250,
        height: 120,
        borderRadius: 28
    }
})

export default Slider;
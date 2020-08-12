import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const ProductHorizontal = ({ onPress, name, image }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.mainView}>
            <Image source={{ uri: image }} style={styles.imageView} />
            <Text numberOfLines={3} style={styles.textView}>{name}</Text>
        </TouchableOpacity>
    );
};

export default ProductHorizontal;

const styles = StyleSheet.create({
    mainView: {
        height: 400,
        width: 120,
        marginVertical: 30,
        alignItems: 'center',
    },
    imageView: {
        height: 85,
        width: 85,
        borderRadius: 8
    },
    searchImage: {
        height: 26,
        width: 31,
        right: 10,
        position: 'absolute'
    },
    textView: {
        fontSize: 18,
        lineHeight: 33,
        fontWeight: "500",
        textAlign: 'center'
    },
})

import React from 'react';
import { SafeAreaView, TouchableOpacity, View, StyleSheet, Image, Text } from 'react-native';
import BackButton from '../Assets/Icons/backButton.png';
import Search from '../Assets/Icons/search.png';

const Header = ({ onPress }) => {
    return (
        <SafeAreaView>
            <View style={styles.mainView}>
                <TouchableOpacity onPress={onPress}>
                    <Image source={BackButton} style={{ height: 26, width: 31 }} />
                </TouchableOpacity>
                <Text style={styles.textView}>{"Daily Mart"}</Text>
                <Image source={Search} style={styles.searchImage} />
            </View>
            <Text style={styles.addressView}>{"VR Bengaluru,ITPL main road"}</Text>
        </SafeAreaView>
    );
};

export default Header;

const styles = StyleSheet.create({
    mainView: {
        height: 55,
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        zIndex: 999
    },
    textView: {
        fontSize: 18,
        lineHeight: 33,
        fontWeight: "500",
        marginHorizontal: 20
    },
    addressView: {
        fontSize: 15,
        lineHeight: 33,
        fontWeight: "300",
        marginHorizontal: 70,
        marginVertical: -15
    },
    searchImage: {
        height: 26,
        width: 31,
        right: 10,
        position: 'absolute'
    }
})

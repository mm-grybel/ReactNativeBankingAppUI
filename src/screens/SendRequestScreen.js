import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styled from 'styled-components';

const SendRequestScreen = () => {
    return (
        <View style={styles.container}>
            <Text>
                SendRequestScreen
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SendRequestScreen;
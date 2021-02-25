import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TouchScreen from './screens/TouchScreen';
import PinScreen from './screens/PinScreen';

export default App = () => {
    const AppStack = createStackNavigator();
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode='none'>
                <AppStack.Screen name='Touch' component={TouchScreen} />
                <AppStack.Screen name='Pin' component={PinScreen} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({});

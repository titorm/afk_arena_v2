/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Router from './routes/Router';

function App() {
    return (
        <NavigationContainer>
            <Router />
        </NavigationContainer>
    );
}

export default App;

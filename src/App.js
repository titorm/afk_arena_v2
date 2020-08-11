/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Firebase from 'firebase';

import Router from './routes/Router';

function App() {
    const [user, setUser] = useState(null);

    Firebase.auth().onAuthStateChanged((_user) => {
        setUser(_user);
    });

    return (
        <NavigationContainer>
            <Router user={user} />
        </NavigationContainer>
    );
}

export default App;

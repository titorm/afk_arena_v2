import React from 'react';
import { Image } from 'react-native';

import colors from '../theme/colors/colors';

import HeroScreen from '../screens/player/HeroScreen';
import LoginScreen from '../screens/login/LoginScreen';
import HeroListScreen from '../screens/player/HeroListScreen';

const options = {
    headerLeft: () => (
        <Image
            style={{ marginLeft: 12, width: 50, height: 50 }}
            source={require('../../assets/images/other/logo.png')}
            resizeMode='contain'
        />
    ),
    headerStyle: {
        backgroundColor: colors.header,
    },
    headerTitleStyle: {
        color: 'white',
    },
};

const routeList = [
    // public
    { key: 'login', name: 'login', component: LoginScreen, options },
    // private
    { key: 'heroList', name: 'heroList', component: HeroListScreen, options },
    { key: 'hero', name: 'hero', component: HeroScreen, options },
];

export default routeList;

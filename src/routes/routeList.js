import React from 'react';
import { Image } from 'react-native';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

import HeroScreen from '../screens/player/HeroScreen';
import LoginScreen from '../screens/login/LoginScreen';

import AppRouter from './AppRouter';

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
        fontWeight: '500',
        fontFamily: typography.fontFamily.light,
        letterSpacing: typography.letterSpacing.h6,
        textTransform: typography.textTransform.uppercase,
    },
};

const routeList = [
    // public
    { key: 'login', name: 'login', component: LoginScreen, options },
    // app
    { key: 'app', name: 'app', component: AppRouter, options },
    { key: 'hero', name: 'hero', component: HeroScreen, options },
];

export default routeList;

import React from 'react';
import { Image } from 'react-native';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

import HeroScreen from '../screens/player/HeroScreen';
import AboutScreen from '../screens/about/AboutScreen';
import LoginScreen from '../screens/login/LoginScreen';
import CreditsScreen from '../screens/credits/CreditsScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import RoadMapScreen from '../screens/roadMap/RoadMapScreen';
import ChangePasswordScreen from '../screens/changePassword/ChangePasswordScreen';

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
    { key: 'about', name: 'about', component: AboutScreen, options },
    { key: 'credits', name: 'credits', component: CreditsScreen, options },
    { key: 'profile', name: 'profile', component: ProfileScreen, options },
    { key: 'roadMap', name: 'roadMap', component: RoadMapScreen, options },
    { key: 'changePassword', name: 'changePassword', component: ChangePasswordScreen, options },
];

export default routeList;

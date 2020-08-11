import React from 'react';
import { Image } from 'react-native';

import LoginScreen from '../screens/login/LoginScreen';
import colors from '../theme/colors/colors';

const options = (title) => ({
    title,
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
});

const routeList = [
    { key: 'login', name: 'login', component: LoginScreen, options: options('') },
];

export default routeList;

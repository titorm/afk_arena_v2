import React from 'react';

import icons from '../utils/icons';

import Icon from '../components/Icon';

import HeroListScreen from '../screens/player/HeroListScreen';

const iconTab = (color, size, name) => (
    <Icon
        color={color}
        name={name}
        size={size}
        type='regular'
    />
);

const options = (title, icon) => ({
    tabBarIcon: ({ color, size }) => iconTab(color, size, icon),
    title,
});

const privateRouteList = [
    { key: 'heroList', name: 'heroList', component: HeroListScreen, options: options('Hero List', icons.bars) },
    // { key: 'profile', name: 'profile', component: HeroListScreen, options: options('Profile', icons.user) },
];

export default privateRouteList;

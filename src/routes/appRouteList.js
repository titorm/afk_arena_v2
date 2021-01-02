import React from 'react';

import icons from '../utils/icons';

import Icon from '../components/Icon';

import MoreScreen from '../screens/more/MoreScreen';
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
    { key: 'heroes', name: 'heroes', component: HeroListScreen, options: options('Heroes', icons.users) },
    { key: 'more', name: 'more', component: MoreScreen, options: options('More', icons.ellipsis_v) },
];

export default privateRouteList;

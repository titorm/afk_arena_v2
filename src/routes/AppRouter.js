import React from 'react';
// import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

import appRouteList from './appRouteList';

const Tab = createBottomTabNavigator();

const optionsNavigation = {
    keyboardHidesTabBar: true,
    activeBackgroundColor: colors.white,
    activeTintColor: colors.primary,
    labelStyle: {
        fontFamily: typography.fontFamily.regular,
    },
    inactiveBackgroundColor: colors.white,
    inactiveTintColor: colors.gray,
    showInactiveLabel: false,
    style: {
        borderTopWidth: 0.2,
        borderTopColor: colors.white,
        paddingVertical: 2,
        backgroundColor: colors.white,
        // ...Platform.select(elevation),
    },
};

function AppRouter() {
    function renderScreen({ key, name, component, options }) {
        return (
            <Tab.Screen
                key={key}
                name={name}
                component={component}
                options={options}
            />
        );
    }

    function renderRoutes() {
        return appRouteList.map(renderScreen);
    }

    return (
        <Tab.Navigator tabBarOptions={optionsNavigation}>
            {renderRoutes()}
        </Tab.Navigator>
    );
}

export default AppRouter;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import routeList from './routeList';

const Stack = createStackNavigator();

function Router() {
    const { user } = useSelector((state) => state.user);
    let initialRouteName = 'login';
    if (user) {
        initialRouteName = 'heroList';
    }

    function renderScreen({ key, name, component, options }) {
        return (
            <Stack.Screen
                key={key}
                name={name}
                component={component}
                options={options}
            />
        );
    }

    function renderRoutes() {
        return routeList.map(renderScreen);
    }

    return (
        <Stack.Navigator initialRouteName={initialRouteName}>
            {renderRoutes()}
        </Stack.Navigator>
    );
}

export default Router;

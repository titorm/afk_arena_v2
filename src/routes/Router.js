import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import routeList from './routeList';

const Stack = createStackNavigator();

function Router() {
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
        <Stack.Navigator>
            {renderRoutes()}
        </Stack.Navigator>
    );
}

export default Router;

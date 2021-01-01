import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainRouter from './MainRouter';

const Stack = createStackNavigator();

function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name='router'
                component={MainRouter}
            />
        </Stack.Navigator>
    );
}

export default Router;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FilterDrawer from './FilterDrawer';

const Stack = createStackNavigator();

function Router() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name='filterDrawer'
                component={FilterDrawer}
            />
        </Stack.Navigator>
    );
}

export default Router;

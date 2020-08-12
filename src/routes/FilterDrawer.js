import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainDrawer from './MainDrawer';
import FilterDrawerContent from '../components/FilterDrawerContent';

const Drawer = createDrawerNavigator();

function FilterDrawer() {
    return (
        <Drawer.Navigator
            drawerPosition='right'
            drawerContent={(props) => <FilterDrawerContent {...props} />}
        >
            <Drawer.Screen
                name='mainDrawer'
                component={MainDrawer}
            />
        </Drawer.Navigator>
    );
}

export default FilterDrawer;

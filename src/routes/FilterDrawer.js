import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainRouter from './MainRouter';
import FilterDrawerContent from '../components/FilterDrawerContent';

const Drawer = createDrawerNavigator();

function FilterDrawer() {
    return (
        <Drawer.Navigator
            drawerPosition='right'
            drawerContent={(props) => <FilterDrawerContent {...props} />}
        >
            <Drawer.Screen
                name='router'
                component={MainRouter}
            />
        </Drawer.Navigator>
    );
}

export default FilterDrawer;

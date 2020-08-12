import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MainRouter from './MainRouter';
import MainDrawerContent from '../components/MainDrawerContent';

const Drawer = createDrawerNavigator();

function MainDrawer() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <MainDrawerContent {...props} />}
        >
            <Drawer.Screen
                name='router'
                component={MainRouter}
            />
        </Drawer.Navigator>
    );
}

export default MainDrawer;

import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// eslint-disable-next-line no-unused-vars
function MainDrawerContent(props) {
    return (
        <DrawerContentScrollView>
            <View>
                <DrawerItem
                    label='Início'
                />
            </View>
        </DrawerContentScrollView>
    );
}

export default MainDrawerContent;

import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function MainDrawerContent(props) {
    console.log(props);
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

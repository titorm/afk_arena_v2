import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

// eslint-disable-next-line no-unused-vars
function FilterDrawerContent(props) {
    return (
        <DrawerContentScrollView>
            <View>
                <DrawerItem
                    label='Filter'
                />
            </View>
        </DrawerContentScrollView>
    );
}

export default FilterDrawerContent;

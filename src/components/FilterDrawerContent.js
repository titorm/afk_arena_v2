import React from 'react';
import { View } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function FilterDrawerContent(props) {
    console.log(props);
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

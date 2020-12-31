/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import heroService from '../../../services/heroService';

import HeroFurnitureItem from './HeroFurnitureItem';

function HeroFurniture(props) {
    const { playerInfo = {} } = props;

    function renderFurnitureItem(furniture, index) {
        return (
            <HeroFurnitureItem
                key={index}
                furniture={furniture}
            />
        );
    }

    return (
        <View style={styles.container}>
            {heroService.isFurnitureAvailable(playerInfo.ascension) && (
                <>
                    {playerInfo.furniture.large.map(renderFurnitureItem)}
                    {playerInfo.furniture.small.map(renderFurnitureItem)}
                    {playerInfo.furniture.hanging.map(renderFurnitureItem)}
                </>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default HeroFurniture;

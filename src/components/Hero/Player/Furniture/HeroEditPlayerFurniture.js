import React from 'react';
import { StyleSheet, View } from 'react-native';

import Caption from '../../../Caption';

import HeroEditPlayerFurnitureItem from './HeroEditPlayerFurnitureItem';

function HeroEditPlayerFurniture(props) {
    const { hero, update } = props;

    function updateFurniture(type, pos, property, newValue) {
        const newFurniture = { ...hero.playerInfo.furniture };
        newFurniture[type][pos][property] = newValue;
        update(newFurniture);
    }

    // render
    function renderFurnitures(type) {
        return (
            <View style={styles.furnitureContainer}>
                <Caption>{`${type} Furniture`}</Caption>
                <View style={styles.furnitureTypeContainer}>
                    {renderFurnitureType(type)}
                </View>
            </View>
        );
    }

    function renderFurnitureType(type) {
        return hero.playerInfo.furniture[type].map((furniture, index) => (
            <HeroEditPlayerFurnitureItem
                // eslint-disable-next-line react/no-array-index-key
                key={`${type}_${index}`}
                furniture={furniture}
                type={type}
                pos={index}
                update={updateFurniture}
            />
        ));
    }

    function renderFurniture() {
        return (
            <>
                {renderFurnitures('large')}
                {renderFurnitures('small')}
                {renderFurnitures('hanging')}
            </>
        );
    }

    return (
        <>
            {renderFurniture()}
        </>
    );
}

const styles = StyleSheet.create({
    furnitureContainer: {
        flex: 1,
        marginBottom: 12,
    },
    furnitureTypeContainer: {
        flexDirection: 'row',
    },
});

export default HeroEditPlayerFurniture;

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Caption from '../../Caption';
import HeroEditFurnitureItem from './HeroEditFurnitureItem';

function HeroEditFurniture(props) {
    const { hero, update } = props;

    function isFurnitureAvailable() {
        const { ascension } = hero.playerInfo;
        return ascension.includes('ASCENDED');
    }

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
            <HeroEditFurnitureItem
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
        if (!isFurnitureAvailable()) {
            return null;
        }
        return (
            <>
                {renderFurnitures('large')}
                {renderFurnitures('small')}
                {renderFurnitures('hanging')}
            </>
        );
    }

    return (
        <View style={styles.container}>
            {renderFurniture()}
        </View>
    );
}

const styles = StyleSheet.create({
    furnitureContainer: {
        width: '100%',
        marginTop: 24,
        alignItems: 'center',
    },
    furnitureTypeContainer: {
        flexDirection: 'row',
    },
});

export default HeroEditFurniture;

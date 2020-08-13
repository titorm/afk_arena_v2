import React from 'react';
import { StyleSheet, View } from 'react-native';

import Caption from '../../Caption';
import HeroEditEquipmentItem from './HeroEditEquipmentItem';

function HeroEditEquipment(props) {
    const { hero, update } = props;

    function updateEquipment(type, property, newValue) {
        const newEquips = { ...hero.playerInfo.equipment };
        newEquips[type][property] = newValue;
        update(newEquips);
    }

    return (
        <View style={styles.container}>
            <Caption>Equipment</Caption>
            <HeroEditEquipmentItem
                type='weapon'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.weapon}
                update={updateEquipment}
            />
            <HeroEditEquipmentItem
                type='head'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.head}
                update={updateEquipment}
            />
            <HeroEditEquipmentItem
                type='body'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.body}
                update={updateEquipment}
            />
            <HeroEditEquipmentItem
                type='feet'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.feet}
                update={updateEquipment}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 24,
        alignItems: 'center',
    },
});

export default HeroEditEquipment;

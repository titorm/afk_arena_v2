import React from 'react';

import HeroEditPlayerEquipmentItem from './HeroEditPlayerEquipmentItem';

function HeroEditPlayerEquipment(props) {
    const { hero, update } = props;

    const updateEquipment = (type, property, newValue) => {
        const newEquips = { ...hero.playerInfo.equipment };
        newEquips[type][property] = newValue;
        update(newEquips);
    };

    return (
        <>
            <HeroEditPlayerEquipmentItem
                type='weapon'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.weapon}
                update={updateEquipment}
            />
            <HeroEditPlayerEquipmentItem
                type='head'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.head}
                update={updateEquipment}
            />
            <HeroEditPlayerEquipmentItem
                type='body'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.body}
                update={updateEquipment}
            />
            <HeroEditPlayerEquipmentItem
                type='feet'
                heroType={hero.category.type}
                equipment={hero.playerInfo.equipment.feet}
                update={updateEquipment}
            />
        </>
    );
}

export default HeroEditPlayerEquipment;

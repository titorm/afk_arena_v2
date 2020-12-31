import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../../../theme/colors/colors';
import heroService from '../../../services/heroService';

import Icon from '../../Icon';

function HeroItemEquipments(props) {
    const { hero, playerInfo, type } = props;

    const equip = playerInfo.equipment[type];
    const imgSrc = heroService.getEquipment(hero.category.type, type, equip.acquired, equip.tier);

    function renderStars() {
        const stars = [];
        for (let i = 0; i < equip.stars; i++) {
            stars.push({});
        }
        return stars.map((_, index) => (
            <Icon
                key={index.toString()}
                color={colors.secondary}
                name='star'
                size={11}
                type='solid'
            />
        ));
    }

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={imgSrc}
            />
            <View style={styles.starsContainer}>
                {renderStars()}
            </View>
            {equip.acquired && (
                <View style={styles.tierContainer}>
                    <Text>{`T${equip.tier}`}</Text>
                    {equip.faction && equip.faction !== 'NONE' && typeof equip.faction !== 'boolean' && (
                        <Image
                            style={styles.faction}
                            source={heroService.getHeroFaction(equip.faction)}
                        />
                    )}
                </View>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 4,
    },
    starsContainer: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    tierContainer: {
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    faction: {
        width: 16,
        height: 16,
        marginLeft: 8,
    },
});

export default HeroItemEquipments;

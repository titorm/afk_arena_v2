
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import colors from '../../../../theme/colors/colors';
import typography from '../../../../theme/typography';
import heroService from '../../../../services/heroService';

import { factionOptionList } from '../../../../services/infoService';

import Picker from '../../../Picker';
import CheckBox from '../../../CheckBox';

function HeroEditPlayerEquipmentItem(props) {
    const { equipment, heroType, type, update } = props;

    // consts
    const tierOptionList = [
        { value: 0, label: 'T0' },
        { value: 1, label: 'T1' },
        { value: 2, label: 'T2' },
    ];

    const starOptionList = [
        { value: 0, label: 'Base' },
        { value: 1, label: '1 Star' },
        { value: 2, label: '2 Stars' },
        { value: 3, label: '3 Stars' },
        { value: 4, label: '4 Stars' },
        { value: 5, label: '5 Stars' },
    ];

    // methods
    function updateAcquired() {
        updateItem('acquired', !equipment.acquired);
        if (!equipment.acquired) {
            updateItem('faction', 'NONE');
            updateItem('tier', 0);
            updateItem('stars', 0);
        }
    }

    function updateFaction(faction) {
        updateItem('faction', faction);
    }

    function updateTier(tier) {
        updateItem('tier', tier);
    }

    function updateStars(stars) {
        updateItem('stars', stars);
    }

    function updateItem(property, newValue) {
        update(type, property, newValue);
    }

    // render
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Image
                    style={styles.image}
                    source={heroService.getEquipment(heroType, type, equipment.acquired, equipment.tier)}
                />
                <View style={styles.checkBox}>
                    <CheckBox
                        title='Acquired'
                        checked={equipment.acquired}
                        onPress={updateAcquired}
                    />
                </View>
            </View>
            <View style={[styles.subContainer, styles.pickersContainer]}>
                <View style={styles.pickerContainer(2)}>
                    <Text style={styles.pickerLabel}>Faction</Text>
                    <Picker
                        enabled={equipment.acquired}
                        options={factionOptionList}
                        placeholder='None'
                        selectedValue={equipment.faction || 'NONE'}
                        onValueChange={updateFaction}
                    />
                </View>
                <View style={styles.pickerContainer()}>
                    <Text style={styles.pickerLabel}>Tier</Text>
                    <Picker
                        enabled={equipment.acquired}
                        options={tierOptionList}
                        placeholder='T0'
                        selectedValue={equipment.tier}
                        onValueChange={updateTier}
                    />
                </View>
                <View style={styles.pickerContainer(1.5)}>
                    <Text style={styles.pickerLabel}>Stars</Text>
                    <Picker
                        enabled={equipment.acquired}
                        options={starOptionList}
                        placeholder='T0'
                        selectedValue={equipment.stars}
                        onValueChange={updateStars}
                    />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 12,
    },
    subContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    pickersContainer: {
        flexDirection: 'row',
        marginVertical: 8,
        justifyContent: 'space-between',
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 4,
    },
    checkBox: {
        marginLeft: 8,
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
    },
    pickerContainer: (flex = 1) => ({
        flex,
    }),
    pickerLabel: {
        color: colors.primary,
        fontSize: typography.fontSize.body2,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.body2,
    },
});

export default HeroEditPlayerEquipmentItem;

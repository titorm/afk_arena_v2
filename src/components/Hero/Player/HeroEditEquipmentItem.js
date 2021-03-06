
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import theme from '../../../theme/theme';
import Picker from '../../Picker';
import CheckBox from '../../CheckBox';
import heroService from '../../../services/heroService';

function HeroEditEquipmentItem(props) {
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

    const factionPressed = equipment.acquired ? updateFaction : null;

    // methods
    function updateAcquired() {
        updateItem('acquired', !equipment.acquired);
    }

    function updateFaction() {
        updateItem('faction', !equipment.faction);
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
            <Avatar.Image
                size={64}
                source={heroService.getEquipment(heroType, type, equipment.acquired, equipment.tier)}
                theme={theme}
            />
            <View style={styles.checkBox}>
                <CheckBox
                    title='Acquired'
                    checked={equipment.acquired}
                    onPress={updateAcquired}
                />
                <CheckBox
                    title='Faction'
                    checked={equipment.acquired && equipment.faction}
                    onPress={factionPressed}
                />
            </View>
            <View>
                <Text>Tier</Text>
                <Picker
                    enabled={equipment.acquired}
                    options={tierOptionList}
                    placeholder='T0'
                    selectedValue={equipment.tier}
                    style={styles.pickerContainer}
                    onValueChange={updateTier}
                />
            </View>
            <View style={styles.starsContainer}>
                <Text>Stars</Text>
                <Picker
                    enabled={equipment.acquired}
                    options={starOptionList}
                    placeholder='T0'
                    selectedValue={equipment.stars}
                    style={styles.pickerContainer}
                    onValueChange={updateStars}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 8,
        alignItems: 'center',
        flexDirection: 'row',
    },
    checkBox: {
        marginLeft: 8,
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
    },
    pickerContainer: {
        minWidth: 10,
    },
    starsContainer: {
        marginLeft: 12,
    },
});

export default HeroEditEquipmentItem;

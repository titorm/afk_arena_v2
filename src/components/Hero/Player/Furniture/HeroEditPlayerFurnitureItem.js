
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../../../theme/colors/colors';
import typography from '../../../../theme/typography';

import Picker from '../../../Picker';
import CheckBox from '../../../CheckBox';

function HeroEditPlayerFurnitureItem(props) {
    const { furniture, update, type = '', pos } = props;

    const plusOptionList = [
        { value: 0, label: 'Base' },
        { value: 1, label: '+1' },
        { value: 2, label: '+2' },
        { value: 3, label: 'Max' },
    ];

    function updateAcquired() {
        updateItem('acquired', !furniture.acquired);
    }

    function updatePlus(plus) {
        updateItem('plus', plus);
    }

    function updateItem(property, newValue) {
        update(type, pos, property, newValue);
    }

    return (
        <View style={styles.container}>
            <View style={styles.checkBox}>
                <CheckBox
                    title='Acquired'
                    checked={furniture.acquired}
                    onPress={updateAcquired}
                />
            </View>
            <>
                <Text style={styles.starsLabel}>Plus</Text>
                <Picker
                    enabled={furniture.acquired}
                    options={plusOptionList}
                    placeholder='Base'
                    selectedValue={furniture.plus}
                    style={styles.pickerContainer}
                    onValueChange={updatePlus}
                />
            </>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
    },
    checkBox: {
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
    },
    checkBoxContainer: {
        minWidth: 110,
        borderWidth: 0,
        marginVertical: 0,
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
    },
    pickerContainer: {
        minWidth: 10,
    },
    starsLabel: {
        color: colors.primary,
        fontSize: typography.fontSize.body2,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.body2,
    },
});

export default HeroEditPlayerFurnitureItem;

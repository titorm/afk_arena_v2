import React from 'react';
import { StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-fontawesome-pro';

import colors from '../theme/colors/colors';

function CustomCheckBox(props) {
    const { checked, onPress, style, title = '' } = props;

    FontAwesome.loadFont();

    function checkedIcon() {
        return (
            <Icon
                name='check-square'
                color={colors.primary}
                type='regular'
            />
        );
    }

    function uncheckedIcon() {
        return (
            <Icon
                name='square'
                color='gray'
                type='regular'
            />
        );
    }

    return (
        <CheckBox
            title={title}
            checkedColor={colors.primary}
            containerStyle={[styles.checkBoxContainer, style]}
            checked={checked}
            checkedIcon={checkedIcon()}
            uncheckedIcon={uncheckedIcon()}
            onPress={onPress}
        />
    );
}

const styles = StyleSheet.create({
    checkBoxContainer: {
        minWidth: 110,
        borderWidth: 0,
        marginVertical: 0,
        paddingVertical: 8,
        backgroundColor: 'transparent',
        paddingHorizontal: 0,
    },
});

export default CustomCheckBox;

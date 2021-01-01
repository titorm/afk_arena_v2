import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { CheckBox } from 'react-native-elements';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import icons from '../utils/icons';
import colors from '../theme/colors/colors';
import typography from '../theme/typography';

import Icon from './Icon';

function CustomCheckBox(props) {
    const { checked, disabled = false, onPress, style, title = '' } = props;

    FontAwesome.loadFont();

    function checkedIcon() {
        return (
            <Icon
                name={icons.check_square}
                color={disabled ? colors.disabled : colors.secondary}
                type='solid'
            />
        );
    }

    function uncheckedIcon() {
        return (
            <Icon
                name={icons.square}
                color={colors.text}
                type='light'
            />
        );
    }

    function renderTitle() {
        return (
            <Text style={styles.text}>{title}</Text>
        );
    }

    return (
        <CheckBox
            checked={checked}
            checkedColor={disabled ? colors.disabled : colors.secondary}
            containerStyle={[styles.checkBoxContainer, style]}
            title={renderTitle()}
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
    text: {
        marginLeft: 4,
        fontFamily: typography.fontFamily.medium,
    },
});

export default CustomCheckBox;

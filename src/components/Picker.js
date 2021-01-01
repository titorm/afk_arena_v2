import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from 'native-base';

import colors from '../theme/colors/colors';

function CustomPicker(props) {
    const { enabled = true, options = [], onValueChange, placeholder, selectedValue, style } = props;

    function renderOptions() {
        return options.map((option) => (
            <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
            />
        ));
    }

    return (
        <Picker
            mode='dropdown'
            enabled={enabled}
            style={[styles.pickerStyle, style, !enabled && styles.disabledStyle]}
            textStyle={[styles.pickerTextStyle, !enabled && styles.textDisabledStyle]}
            placeholder={placeholder}
            selectedValue={selectedValue}
            onValueChange={onValueChange}
        >
            {renderOptions()}
        </Picker>
    );
}

const styles = StyleSheet.create({
    pickerStyle: {
        minWidth: 175,
        marginTop: 4,
        borderWidth: 1,
        borderColor: '#00000099',
        borderRadius: 8,
        justifyContent: 'center',
    },
    pickerTextStyle: {
        color: colors.text,
        textAlign: 'center',
    },
    disabledStyle: {
        borderColor: '#80808099',
    },
    textDisabledStyle: {
        color: colors.disabled,
    },
});

export default CustomPicker;

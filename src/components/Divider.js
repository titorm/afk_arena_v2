import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../theme/colors/colors';

interface Props {
    style?: any,
}

function Divider(props: Props) {
    const { style } = props;

    return (
        <View style={[styles.divider, style]} />
    );
}

const styles = StyleSheet.create({
    divider: {
        height: 1,
        marginVertical: 8,
        backgroundColor: colors.disabled,
    },
});

export default Divider;

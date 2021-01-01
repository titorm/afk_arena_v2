import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

function Caption({ children, style }) {
    return (
        <Text style={[styles.caption, style]}>
            {children}
        </Text>
    );
}

const styles = StyleSheet.create({
    caption: {
        color: colors.secondary,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.medium,
        letterSpacing: typography.letterSpacing.caption,
        textTransform: typography.textTransform.uppercase,
    },
});

export default Caption;

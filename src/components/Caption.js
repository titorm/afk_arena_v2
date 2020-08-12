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
        letterSpacing: typography.letterSpacing.caption,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.semiBold,
        textTransform: typography.textTransform.uppercase,
        color: colors.primary,
    },
});

export default Caption;

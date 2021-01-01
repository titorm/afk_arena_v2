import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

function PageHeader(props) {
    const { title, subtitle } = props;

    return (
        <>
            <Text style={styles.h4}>{title}</Text>
            <Text style={styles.subtitle2}>{subtitle}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    h4: {
        color: colors.text,
        fontSize: typography.fontSize.h4,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
    },
    subtitle2: {
        color: colors.text,
        fontSize: typography.fontSize.subtitle2,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
        marginBottom: 8,
    },
});

export default PageHeader;

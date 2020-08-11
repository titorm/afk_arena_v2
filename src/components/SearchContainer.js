import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

function HeroListContainer() {
    return (
        <View style={styles.container}>
            <Text style={styles.caption}>Filters</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 12,
    },
    caption: {
        letterSpacing: typography.letterSpacing.caption,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.semiBold,
        textTransform: typography.textTransform.uppercase,
        color: colors.primary,
    },
});

export default HeroListContainer;

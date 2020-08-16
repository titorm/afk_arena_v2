import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../theme/colors/colors';
import typography from '../theme/typography';

function NoResults(props) {
    const { subtitle = 'Maybe if you change the filters?', title = 'No Results' } = props;

    function renderSubtitle() {
        if (!subtitle) {
            return null;
        }
        return (
            <Text style={styles.overline}>{subtitle}</Text>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.caption}>{title}</Text>
            {renderSubtitle()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderColor: '#808080',
        marginVertical: 20,
        paddingVertical: 12,
        paddingHorizontal: 8,
        borderBottomWidth: 1,
    },
    caption: {
        color: colors.text,
        fontSize: typography.fontSize.h6,
        fontFamily: typography.fontFamily.light,
        letterSpacing: typography.letterSpacing.h6,
        textTransform: typography.textTransform.uppercase,
    },
    overline: {
        color: colors.text,
        fontSize: typography.fontSize.overline,
        marginTop: 8,
        fontFamily: typography.fontFamily.medium,
        letterSpacing: typography.letterSpacing.overline,
        textTransform: typography.textTransform.uppercase,
    },
});

export default NoResults;

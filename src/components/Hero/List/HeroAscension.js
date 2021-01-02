import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../../theme/colors/colors';
import typography from '../../../theme/typography';

import Icon from '../../Icon';

function HeroItemAscension(props) {
    const { ascensionColor, playerInfo } = props;

    const acquired = playerInfo.ascension && playerInfo.ascension !== 'NONE';

    if (!acquired) {
        return null;
    }

    function getAscencionStars() {
        if (playerInfo.ascension.includes('ASCENDED')) {
            return new Array(Number(playerInfo.ascension.split('_')[1])).fill('');
        }
        return [];
    }

    function getStars() {
        return getAscencionStars().map((_, index) => (
            <Icon
                key={index.toString()}
                color={colors.secondary}
                name='star'
                size={11}
                type='solid'
            />
        ));
    }

    if (playerInfo.ascension.includes('_PLUS')) {
        return (
            <View style={styles.plusContainer(ascensionColor)}>
                <Text style={styles.plus(ascensionColor)}>+</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {getStars()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    plusContainer: (borderColor) => ({
        left: 24,
        width: 16,
        height: 16,
        bottom: -8,
        padding: 0,
        position: 'absolute',
        alignItems: 'center',
        borderColor,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: colors.white,
    }),
    plus: (color) => ({
        color,
        fontSize: typography.fontSize.caption,
        marginTop: -1,
        fontFamily: typography.fontFamily.regular,
        marginLeft: 0.5,
    }),
});

export default HeroItemAscension;

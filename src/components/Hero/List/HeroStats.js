import React from 'react';
import { StyleSheet, View } from 'react-native';

import typography from '../../../theme/typography';

import HeroFurniture from './HeroFurniture';
import HeroSignatureItem from './HeroSignatureItem';

function HeroItemStats(props) {
    const { hero, playerInfo } = props;

    return (
        <View style={styles.container}>
            <HeroSignatureItem
                hero={hero}
                playerInfo={playerInfo}
            />
            <HeroFurniture
                playerInfo={playerInfo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chipText: {
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.caption,
    },
});

export default HeroItemStats;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';

import typography from '../../../theme/typography';

import HeroSignatureItem from './HeroSignatureItem';

function HeroItemStats(props) {
    const { hero, playerInfo } = props;

    const heroAcquired = playerInfo.ascension && playerInfo.ascension !== 'NONE';

    if (!heroAcquired) {
        return (
            <Chip
                mode='flat'
                textStyle={styles.chipText}
            >
                Not Acquired!
            </Chip>
        );
    }

    return (
        <View style={styles.container}>
            <HeroSignatureItem
                hero={hero}
                playerInfo={playerInfo}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    image: {
        marginRight: 6,
    },
    chipText: {
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.caption,
    },
});

export default HeroItemStats;

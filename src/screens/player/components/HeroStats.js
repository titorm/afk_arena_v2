import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip } from 'react-native-paper';

import typography from '../../../theme/typography';

import HeroAscension from './HeroAscension';
import HeroSignatureItem from './HeroSignatureItem';

function HeroStats(props) {
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
            <View style={styles.rowStats}>
                <HeroAscension playerInfo={playerInfo} />
                <HeroSignatureItem
                    hero={hero}
                    playerInfo={playerInfo}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 4,
    },
    rowStats: {
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

export default HeroStats;

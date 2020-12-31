import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../../theme/colors/colors';

import Icon from '../../Icon';

function HeroItemAscension(props) {
    const { playerInfo } = props;

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
});

export default HeroItemAscension;

import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import Icon from 'react-native-fontawesome-pro';

import heroService from '../../../services/heroService';

function HeroAscension(props) {
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
        return getAscencionStars().map(() => (
            <Icon
                color='black'
                name='star'
                size={8}
                type='solid'
            />
        ));
    }

    return (
        <View style={styles.container}>
            <Avatar.Image
                style={styles.image}
                size={28}
                source={heroService.getHeroAscension(playerInfo.ascension)}
            />
            <View style={styles.starContainer}>
                {getStars()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: 30,
    },
    image: {
        backgroundColor: 'transparent',
    },
    starContainer: {
        flexDirection: 'row',
        marginTop: 4,
    },
});

export default HeroAscension;

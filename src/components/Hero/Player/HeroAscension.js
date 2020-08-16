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
        return getAscencionStars().map((_, index) => (
            <Icon
                key={index.toString()}
                color='black'
                name='star'
                size={12}
                type='solid'
            />
        ));
    }

    return (
        <View style={styles.container}>
            <Avatar.Image
                style={styles.image}
                size={56}
                source={heroService.getHeroAscension(playerInfo.ascension)}
            />
            <View style={styles.starsContainer}>
                {getStars()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        marginTop: 12,
        alignItems: 'center',
    },
    image: {
        backgroundColor: 'transparent',
    },
    starsContainer: {
        width: 100,
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default HeroAscension;

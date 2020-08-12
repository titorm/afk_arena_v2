import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import heroService from '../../../services/heroService';

function HeroHeader(props) {
    const { category, bannerUri } = props;
    const size = 24;

    return (
        <View style={styles.container}>
            <Avatar.Image
                size={size}
                source={heroService.getHeroFaction(category.faction)}
            />
            <Avatar.Image
                size={size}
                source={heroService.getHeroType(category.type)}
            />
            <Image
                style={styles.banner}
                source={bannerUri}
                resizeMode='contain'
            />
            <Avatar.Image
                size={size}
                source={heroService.getHeroClass(category.class)}
            />
            <Avatar.Image
                size={size}
                source={heroService.getHeroRole(category.role)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 12,
        marginBottom: 4,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    banner: {
        width: 100,
        height: 200,
    },
});

export default HeroHeader;

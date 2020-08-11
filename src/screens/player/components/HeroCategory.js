import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import heroService from '../../../services/heroService';

function HeroCategory(props) {
    const { category } = props;
    const size = 24;

    return (
        <View style={styles.container}>
            <Avatar.Image
                style={styles.image}
                size={size}
                source={heroService.getHeroFaction(category.faction)}
            />
            <Avatar.Image
                style={styles.image}
                size={size}
                source={heroService.getHeroType(category.type)}
            />
            <Avatar.Image
                style={styles.image}
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
        flexDirection: 'row',
        marginTop: 4,
    },
    image: {
        marginRight: 6,
    },
});

export default HeroCategory;

import React from 'react';
import { StyleSheet, View } from 'react-native';

import Caption from '../../../Caption';
import CheckBox from '../../../CheckBox';

function HeroEditPlayerCrystal(props) {
    const { hero, updateCrystal } = props;

    if (hero.category.faction === 'DIMENSIONAL') {
        return null;
    }

    return (
        <View style={styles.container}>
            <Caption>Crystal</Caption>
            <CheckBox
                checked={hero.playerInfo.onCrystal}
                onPress={updateCrystal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        marginBottom: 8,
    },
});

export default HeroEditPlayerCrystal;

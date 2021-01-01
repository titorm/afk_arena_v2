import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeroEditPlayerAscension from './HeroEditPlayerAscension';
import HeroEditPlayerCrystal from './HeroEditPlayerCrystal';
import HeroEditPlayerSignatureItem from './HeroEditPlayerSignatureItem';

function HeroEditPlayerGeneralData(props) {
    const { hero, updateAscension, updateSignature, updateCrystal } = props;

    return (
        <View style={styles.container}>
            <HeroEditPlayerAscension
                hero={hero}
                updateAscension={updateAscension}
            />
            <HeroEditPlayerSignatureItem
                hero={hero}
                updateSignature={updateSignature}
            />
            <HeroEditPlayerCrystal
                hero={hero}
                updateCrystal={updateCrystal}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
    },
});

export default HeroEditPlayerGeneralData;

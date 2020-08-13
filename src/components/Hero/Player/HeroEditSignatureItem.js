import React from 'react';
import { StyleSheet, View } from 'react-native';

import Picker from '../../Picker';
import Caption from '../../Caption';

function HeroEditSignatureItem(props) {
    const { hero, update } = props;

    function isEnabled(): Boolean {
        const { ascension } = hero.playerInfo;
        return ascension.includes('MYTHIC') || ascension.includes('ASCENDED');
    }

    function getOptions(): [] {
        const { faction } = hero.category;
        const max = (faction === 'CELESTIAL' || faction === 'HYPOGEAN' || faction === 'DIMENSIONAL') ? 40 : 30;
        const possibleList = [
            { value: -1, label: 'Not Unlocked' },
            { value: 0, label: 'Base' },
        ];
        for (let i = 1; i <= max; i++) {
            possibleList.push({ value: i, label: `+${i}` });
        }
        return possibleList;
    }

    return (
        <View style={styles.ascensionContainer}>
            <Caption>Signature Item</Caption>
            <Picker
                enabled={isEnabled()}
                options={getOptions()}
                placeholder='Not Acquired'
                selectedValue={hero.playerInfo.signatureItem}
                onValueChange={update}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    ascensionContainer: {
        flex: 1,
        alignItems: 'center',
    },
});

export default HeroEditSignatureItem;

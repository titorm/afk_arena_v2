import React from 'react';
import { StyleSheet, View } from 'react-native';

import Picker from '../../../Picker';
import Caption from '../../../Caption';

function HeroEditPlayerSignatureItem(props) {
    const { hero, updateSignature } = props;

    function isDisabled() {
        const { ascension } = hero.playerInfo;
        return !ascension.includes('MYTHIC') && !ascension.includes('ASCENDED');
    }

    function signatureOptionList() {
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
        <View style={styles.container}>
            <Caption>Signature Item</Caption>
            <Picker
                enabled={!isDisabled()}
                options={signatureOptionList()}
                placeholder='Not Acquired'
                selectedValue={hero.playerInfo.signatureItem}
                onValueChange={updateSignature}
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

export default HeroEditPlayerSignatureItem;

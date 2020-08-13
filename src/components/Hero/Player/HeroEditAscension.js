import React from 'react';
import { StyleSheet, View } from 'react-native';

import Picker from '../../Picker';
import Caption from '../../Caption';

import { ascensionOptionList } from '../../../services/infoService';

function HeroEditAscension(props) {
    const { hero, update } = props;

    return (
        <View style={styles.ascensionContainer}>
            <Caption>Ascension</Caption>
            <Picker
                options={ascensionOptionList}
                placeholder='Not Acquired'
                selectedValue={hero.playerInfo.ascension}
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

export default HeroEditAscension;

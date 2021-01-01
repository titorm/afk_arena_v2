import React from 'react';
import { StyleSheet, View } from 'react-native';

import Picker from '../../../Picker';
import Caption from '../../../Caption';

import { ascensionOptionList } from '../../../../services/infoService';

function HeroEditPlayerAscension(props) {
    const { hero, updateAscension } = props;

    return (
        <View style={styles.container}>
            <Caption>Ascension</Caption>
            <Picker
                options={ascensionOptionList}
                placeholder='Not Acquired'
                selectedValue={hero.playerInfo.ascension}
                onValueChange={updateAscension}
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

export default HeroEditPlayerAscension;

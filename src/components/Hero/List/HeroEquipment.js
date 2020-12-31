/* eslint-disable react/no-array-index-key */
import React from 'react';
import { StyleSheet, View } from 'react-native';

import HeroEquipmentItem from './HeroEquipmentItem';

function HeroEquipment(props) {
    const { hero = {}, playerInfo = {} } = props;

    function renderEquipmentItem(type) {
        return (
            <HeroEquipmentItem
                hero={hero}
                playerInfo={playerInfo}
                type={type}
            />
        );
    }

    return (
        <View style={styles.container}>
            {renderEquipmentItem('weapon')}
            {renderEquipmentItem('head')}
            {renderEquipmentItem('body')}
            {renderEquipmentItem('feet')}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default HeroEquipment;

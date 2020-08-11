import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import typography from '../../../theme/typography';

function HeroSignatureItem(props) {
    const { hero, playerInfo } = props;

    const acquired = playerInfo.signatureItem !== -1;

    if (!acquired) {
        return null;
    }

    return (
        <View style={styles.container}>
            <Avatar.Image
                style={styles.image}
                size={28}
                source={{ uri: hero.signatureItem.image }}
            />
            <Text style={styles.info}>{`+${playerInfo.signatureItem}`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        marginLeft: 16,
    },
    image: {
        backgroundColor: 'transparent',
    },
    info: {
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.caption,
    },
});

export default HeroSignatureItem;

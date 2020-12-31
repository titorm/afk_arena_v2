import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';

import colors from '../../../theme/colors/colors';
import typography from '../../../theme/typography';

function HeroItemSignatureItem(props) {
    const { hero, playerInfo } = props;

    const { faction } = hero.category;
    const { signatureItem } = playerInfo;

    const maxSignature = (faction === 'CELESTIAL' || faction === 'HYPOGEAN' || faction === 'DIMENSIONAL') ? 40 : 30;

    const acquired = signatureItem !== -1;

    if (!acquired) {
        return null;
    }

    const infoLabel = signatureItem === maxSignature ? 'MAX' : signatureItem;
    const infoLabelSize = signatureItem === maxSignature ? typography.fontSize.caption : typography.fontSize.body1;

    let infoColor = colors.elite;
    let infoBackground = colors.white;
    let infoBorderColor = colors.elite;
    if (signatureItem >= 10 && signatureItem < 20) {
        infoColor = colors.legendary;
        infoBorderColor = colors.legendary;
    } else if (signatureItem >= 20 && signatureItem !== maxSignature) {
        infoColor = colors.mythic;
        infoBorderColor = colors.mythic;
    } else if (signatureItem === maxSignature) {
        infoColor = colors.white;
        infoBackground = colors.mythic;
        infoBorderColor = colors.mythic;
    }

    return (
        <View style={styles.container}>
            <View style={styles.info(infoBorderColor, infoBackground)}>
                <Text style={styles.infoLabel(infoColor, infoLabelSize)}>{infoLabel}</Text>
            </View>
            <Avatar.Image
                style={styles.image}
                size={52}
                source={{ uri: hero.signatureItem.image }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 16,
        alignItems: 'center',
        flexDirection: 'row',
    },
    info: (borderColor, backgroundColor) => ({
        width: 32,
        height: 32,
        alignItems: 'center',
        borderColor,
        marginRight: 8,
        borderWidth: 2,
        borderRadius: 16,
        justifyContent: 'center',
        backgroundColor,
    }),
    infoLabel: (color, fontSize) => ({
        color,
        fontSize,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.caption,
    }),
    image: {
        backgroundColor: 'transparent',
    },
});

export default HeroItemSignatureItem;

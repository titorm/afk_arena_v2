import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-paper';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import HeroStats from './components/HeroItemStats';
import HeroCategory from './components/HeroItemCategory';

function HeroItem(props) {
    const { editHero, hero } = props;
    const { category, info, images, playerInfo } = hero;

    return (
        <Card
            style={styles.cardContainer}
            elevation={2}
            onPress={() => editHero(hero)}
        >
            <View style={styles.container}>
                <Avatar.Image
                    size={64}
                    source={{ uri: images.profile }}
                />
                <View style={styles.infoContainer}>
                    <Text style={styles.infoName}>{info.name}</Text>
                    <Text style={styles.infoTitle}>{info.title}</Text>
                    <HeroCategory category={category} />
                </View>
                <View style={styles.playerContainer}>
                    <HeroStats
                        hero={hero}
                        playerInfo={playerInfo}
                    />
                </View>
            </View>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        margin: 4,
        padding: 8,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flex: 1,
        marginHorizontal: 8,
    },
    infoName: {
        fontSize: typography.fontSize.h6,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h6,
        color: colors.text,
    },
    infoTitle: {
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.caption,
        textTransform: typography.textTransform.uppercase,
        color: colors.text,
    },
    playerContainer: {
        flex: 0.75,
    },
});

export default HeroItem;

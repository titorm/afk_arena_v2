import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { useSelector } from 'react-redux';

import Firebase from 'firebase';

import theme from '../../theme/theme';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import Divider from '../../components/Divider';
import HeroStats from '../../components/Hero/List/HeroStats';
import HeroCategory from '../../components/Hero/List/HeroCategory';
import HeroAscension from '../../components/Hero/List/HeroAscension';
import HeroEquipment from '../../components/Hero/List/HeroEquipment';

function HeroItem(props) {
    const { editHero, hero } = props;
    const { category, info, images, playerInfo } = hero;

    const { user } = useSelector((state) => state.user);

    const [playerInfoState, setPlayerInfoState] = useState(playerInfo);
    const [heroInfo, setHeroInfo] = useState({
        acquired: hero.playerInfo && hero.playerInfo.ascension !== 'NONE',
        mythicOrAscended: (hero.playerInfo?.ascension || '').includes('MYTHIC') || (hero.playerInfo?.ascension || '').includes('ASCENDED'),
        ascensionColor: getAscensionColor(hero.playerInfo.ascension),
    });

    let heroListener;

    useEffect(() => {
        heroListener = Firebase.firestore().collection('players').doc(user.uid)
            .onSnapshot((doc) => {
                if (doc.exists) {
                    const data = doc.data();
                    if (data.heroList && data.heroList.length) {
                        const playerInfoData = data.heroList.find(({ heroId }) => hero.id === heroId);
                        setPlayerInfoState(playerInfoData);
                    }
                }
            });

        return () => {
            if (heroListener) {
                heroListener();
            }
        };
    }, []);

    useEffect(() => {
        setHeroInfo({
            acquired: playerInfoState && playerInfoState.ascension !== 'NONE',
            mythicOrAscended: (playerInfoState?.ascension || '').includes('MYTHIC') || (playerInfoState?.ascension || '').includes('ASCENDED'),
            ascensionColor: getAscensionColor(playerInfoState?.ascension),
        });
    }, [playerInfoState]);

    function getAscensionColor(ascension) {
        if (ascension.includes('ELITE')) {
            return colors.elite;
        }
        if (ascension.includes('LEGENDARY')) {
            return colors.legendary;
        }
        if (ascension.includes('MYTHIC')) {
            return colors.mythic;
        }
        if (ascension.includes('ASCENDED')) {
            return colors.ascended;
        }
        return colors.white;
    }

    return (
        <Card
            style={styles.cardContainer(heroInfo.acquired, heroInfo.acquired ? 4 : 0, heroInfo.ascensionColor)}
            elevation={2}
        >
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.image(heroInfo.acquired ? 4 : 0, heroInfo.ascensionColor)}
                        theme={theme}
                        source={{ uri: images.profile }}
                    />
                    <HeroAscension
                        ascensionColor={heroInfo.ascensionColor}
                        playerInfo={playerInfoState}
                    />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoName}>{info.name}</Text>
                    <Text style={styles.infoTitle}>{info.title}</Text>
                    <HeroCategory category={category} />
                </View>
            </View>
            <Divider />
            {heroInfo.acquired && (
                <>
                    {heroInfo.mythicOrAscended && (
                        <>
                            <HeroStats
                                hero={hero}
                                playerInfo={playerInfoState}
                            />
                            <Divider />
                        </>
                    )}
                    <HeroEquipment
                        hero={hero}
                        playerInfo={playerInfoState}
                    />
                    <Divider />
                </>
            )}
            <Button
                dark
                color={colors.text}
                style={styles.editButton}
                labelStyle={styles.editLabel}
                theme={theme}
                onPress={() => editHero(hero.id)}
            >
                Edit
            </Button>
        </Card>
    );
}

const styles = StyleSheet.create({
    cardContainer: (heroAcquired, borderLeftWidth, borderLeftColor) => ({
        margin: 4,
        padding: 12,
        backgroundColor: heroAcquired ? colors.white : colors.disabled,
        borderLeftColor,
        borderLeftWidth,
    }),
    image: (borderWidth, borderColor) => ({
        width: 64,
        height: 64,
        borderColor,
        borderWidth,
        borderRadius: 32,
    }),
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
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
    editButton: {
        alignSelf: 'flex-end',
    },
    editLabel: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
    },
});

export default HeroItem;

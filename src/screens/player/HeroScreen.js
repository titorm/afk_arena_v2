/* eslint-disable max-lines */
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Accordion } from 'native-base';
import { Button } from 'react-native-paper';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Firebase from 'firebase';

import theme from '../../theme/theme';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';
import heroService from '../../services/heroService';
import feedbackService from '../../services/feedbackService';

import Loading from '../../components/Loading/Loading';
import PageHeader from '../../components/PageHeader';
import HeroEditPlayerSkins from '../../components/Hero/Player/Skins/HeroEditPlayerSkins';
import HeroEditPlayerEquipment from '../../components/Hero/Player/Equipment/HeroEditPlayerEquipment';
import HeroEditPlayerFurniture from '../../components/Hero/Player/Furniture/HeroEditPlayerFurniture';
import HeroEditPlayerGeneralData from '../../components/Hero/Player/GeneralData/HeroEditPlayerGeneralData';

function HeroScreen(props) {
    const { route, navigation } = props;
    const { heroId } = route.params;

    const { user } = useSelector((state) => state.user);

    const [hero, setHero] = useState({});
    const [accordionItemList, setAccordionItemList] = useState([]);

    useEffect(() => {
        Ionicons.loadFont();
    }, []);

    useEffect(() => {
        if (heroId && user && user.uid) {
            getHero()
                // eslint-disable-next-line no-console
                .catch((err) => console.log(err));
        }
    }, [user]);

    useEffect(() => {
        if (hero.id) {
            const newItemList = [{
                title: 'General Data',
                content: (
                    <HeroEditPlayerGeneralData
                        hero={hero}
                        updateAscension={updateHeroAscension}
                        updateSignature={updateHeroSignatureItem}
                        updateCrystal={updateHeroCrystal}
                    />
                ),
            }, {
                title: 'Equipment',
                content: (
                    <HeroEditPlayerEquipment
                        hero={hero}
                        update={updateHeroEquipment}
                    />
                ),
            }];

            if (heroService.isFurnitureAvailable(hero.playerInfo.ascension)) {
                newItemList.push({
                    title: 'Furniture',
                    content: (
                        <HeroEditPlayerFurniture
                            hero={hero}
                            update={updateHeroFurniture}
                        />
                    ),
                });
            }

            if (hero.skins && hero.skins.length) {
                newItemList.push({
                    title: 'Skins',
                    content: (
                        <HeroEditPlayerSkins
                            hero={hero}
                            update={updateHeroSkins}
                        />
                    ),
                });
            }

            setAccordionItemList(newItemList);
        }
    }, [hero]);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Manager',
            headerRight: () => (
                <Button
                    dark
                    color='white'
                    labelStyle={styles.goBack}
                    theme={theme}
                    onPress={navigation.goBack}
                >
                    Go Back
                </Button>
            ),
        });
    }, [navigation]);

    // methods
    async function getHero() {
        const doc = await Firebase.firestore().collection('heroes').doc(heroId).get();
        const playerDoc = await Firebase.firestore().collection('players').doc(user.uid).get();
        if (playerDoc && playerDoc.exists) {
            const data = playerDoc.data();
            if (data.heroList && data.heroList.length) {
                const playerInfo = formatData(data.heroList.find((_hero) => _hero.heroId === heroId));
                setHero({ id: heroId, ...doc.data(), playerInfo });
            }
        }
    }

    // This basically avoids undefined due older versions
    function formatData(data) {
        const newData = { ...data };
        if (newData.equipment.weapon.faction === undefined) {
            newData.equipment.weapon.faction = false;
        }
        if (newData.equipment.head.faction === undefined) {
            newData.equipment.head.faction = false;
        }
        if (newData.equipment.body.faction === undefined) {
            newData.equipment.body.faction = false;
        }
        if (newData.equipment.feet.faction === undefined) {
            newData.equipment.feet.faction = false;
        }
        if (!newData.acquiredSkinList) {
            newData.acquiredSkinList = [];
        }
        return newData;
    }

    function updateHeroAscension(value) {
        updateHeroPlayerInfo(value, 'ascension');
    }

    function updateHeroCrystal() {
        updateHeroPlayerInfo(!hero.playerInfo.onCrystal, 'onCrystal');
    }

    function updateHeroEquipment(newValue) {
        updateHeroPlayerInfo(newValue, 'equipment');
    }

    function updateHeroFurniture(newValue) {
        updateHeroPlayerInfo(newValue, 'furniture');
    }

    function updateHeroSkins(newValue) {
        updateHeroPlayerInfo(newValue, 'acquiredSkinList');
    }

    function updateHeroSignatureItem(value) {
        updateHeroPlayerInfo(value, 'signatureItem');
    }

    function updateHeroPlayerInfo(newValue, property) {
        setHero({ ...hero, playerInfo: { ...hero.playerInfo, [property]: newValue } });
    }

    async function update() {
        const document = Firebase.firestore().collection('players').doc(user.uid);
        const docGet = await document.get();
        const newData = docGet.data().heroList.filter((elem) => elem.heroId !== heroId);
        newData.push(hero.playerInfo);
        document.set({ heroList: newData })
            .then(() => {
                feedbackService.showSuccessMessage('Hero updated successfully!');
                navigation.goBack();
            })
            .catch((error) => {
                feedbackService.showErrorMessage(error);
            });
    }

    if (!hero || !hero.id) {
        return (
            <View style={styles.safeArea}>
                <Loading />
            </View>
        );
    }

    const { info } = hero;

    function renderAccordionContent(item) {
        const borderBottomWidth = item.hideBorderBottom ? 0 : 0.25;
        return (
            <View style={styles.contentContainer(borderBottomWidth)}>
                {item.content}
            </View>
        );
    }

    function renderAccordionHeader(item, expanded) {
        const borderBottomWidth = (expanded || item.hideBorderBottom) ? 0 : 0.25;
        return (
            <View style={styles.headerContainer(borderBottomWidth)}>
                <Text style={styles.caption}>{item.title}</Text>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <ScrollView style={styles.scroll}>
                        <PageHeader
                            title={info.name}
                            subtitle={info.title}
                        />

                        <Button
                            mode='contained'
                            width='50%'
                            color={colors.secondary}
                            theme={theme}
                            style={styles.updateButton}
                            onPress={update}
                        >
                            Update
                        </Button>

                        <Accordion
                            dataArray={accordionItemList}
                            style={styles.accordion}
                            renderHeader={renderAccordionHeader}
                            renderContent={renderAccordionContent}
                        />
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        width: '100%',
        height: '100%',
        paddingTop: 8,
        backgroundColor: colors.background,
    },
    scroll: {
        width: '100%',
        height: '100%',
    },
    background: {
        position: 'absolute',
        opacity: 0.2,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        padding: 4,
        backgroundColor: colors.background,
    },
    subContainer: {
        flex: 1,
        borderRadius: 4,
        backgroundColor: colors.white,
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    accordion: {
        borderWidth: 0.25,
        borderRadius: 4,
    },
    headerContainer: (borderBottomWidth) => ({
        padding: 12,
        borderRadius: 4,
        borderBottomWidth,
    }),
    header: {
        color: colors.secondary,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.medium,
        marginBottom: 8,
        letterSpacing: typography.letterSpacing.caption,
        textTransform: typography.textTransform.uppercase,
    },
    contentContainer: (borderBottomWidth) => ({
        flex: 1,
        marginTop: 4,
        borderRadius: 4,
        backgroundColor: colors.white,
        borderBottomWidth,
        paddingHorizontal: 12,
    }),
    caption: {
        color: colors.secondary,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.medium,
        letterSpacing: typography.letterSpacing.caption,
        textTransform: typography.textTransform.uppercase,
    },
    goBack: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
    },
    updateButton: {
        alignSelf: 'center',
        marginBottom: 16,
    },
});

export default HeroScreen;

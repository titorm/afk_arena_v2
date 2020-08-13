import React, { useEffect, useLayoutEffect, useState } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';
import feedbackService from '../../services/feedbackService';

import Loading from '../../components/Loading/Loading';
import HeroHeader from '../../components/Hero/Player/HeroHeader';
import HeroAscension from '../../components/Hero/Player/HeroAscension';
import HeroEditAscension from '../../components/Hero/Player/HeroEditAscension';
import HeroEditEquipment from '../../components/Hero/Player/HeroEditEquipment';
import HeroEditSignatureItem from '../../components/Hero/Player/HeroEditSignatureItem';

function HeroScreen(props) {
    const { route, navigation } = props;
    const { heroId } = route.params;

    const { user } = useSelector((state) => state.user);

    const [hero, setHero] = useState({});

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

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerRight: () => (
                <Button
                    dark
                    color='white'
                    labelStyle={styles.logout}
                    onPress={logout}
                >
                    Logout
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

    function logout() {
        Firebase.auth().signOut()
            .then(() => {
                navigation.navigate('login');
            });
    }

    function getUri(uri) {
        return { uri };
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

    function updateHeroSignatureItem(value) {
        updateHeroPlayerInfo(value, 'signatureItem');
    }

    function updateHeroEquipment(newValue) {
        updateHeroPlayerInfo(newValue, 'equipment');
    }

    // eslint-disable-next-line no-unused-vars
    function updateHeroFurniture(newValue) {
        updateHeroPlayerInfo(newValue, 'furniture');
    }

    // eslint-disable-next-line no-unused-vars
    function updateHeroSignatureSkins(newValue) {
        updateHeroPlayerInfo(newValue, 'acquiredSkinList');
    }

    function updateHeroPlayerInfo(newValue, property) {
        setHero({ ...hero, playerInfo: { ...hero.playerInfo, [property]: newValue } });
    }

    // eslint-disable-next-line no-unused-vars
    async function update() {
        const document = Firebase.firestore().collection('players').doc(user.uid);
        const docGet = await document.get();
        const newData = docGet.data().heroList.filter((elem) => elem.heroId !== heroId);
        newData.push(hero.playerInfo);
        document.set({ heroList: newData })
            .then(() => {
                feedbackService.showSuccessMessage('Hero updated successfully!');
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'heroList' }],
                });
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

    const { category, images, info, playerInfo } = hero;

    const imageBackgroundUri = getUri(images.art);
    const bannerUri = getUri(images.banner);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                style={styles.background}
                source={imageBackgroundUri}
                resizeMode='contain'
            />
            <ScrollView style={styles.scroll}>
                <View style={styles.container}>
                    <Text style={styles.h4}>{info.name}</Text>
                    <Text style={styles.subtitle2}>{info.title}</Text>
                    <Button
                        dark
                        mode='outlined'
                        color={colors.text}
                        onPress={navigation.goBack}
                    >
                        Go Back
                    </Button>
                    <HeroHeader
                        bannerUri={bannerUri}
                        category={category}
                    />
                    <HeroAscension playerInfo={playerInfo} />
                    <View style={styles.rowContainer}>
                        <HeroEditAscension
                            hero={hero}
                            update={updateHeroAscension}
                        />
                        <HeroEditSignatureItem
                            hero={hero}
                            update={updateHeroSignatureItem}
                        />
                    </View>
                    <HeroEditEquipment
                        hero={hero}
                        update={updateHeroEquipment}
                    />
                </View>
            </ScrollView>
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
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        padding: 8,
        paddingTop: 0,
    },
    background: {
        position: 'absolute',
        opacity: 0.2,
        width: '100%',
        height: '100%',
    },
    logout: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
    },
    h4: {
        fontSize: typography.fontSize.h4,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
        color: colors.text,
    },
    subtitle2: {
        fontSize: typography.fontSize.subtitle2,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.subtitle2,
        textAlign: 'center',
        color: colors.text,
        marginBottom: 8,
    },
    rowContainer: {
        marginTop: 16,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default HeroScreen;

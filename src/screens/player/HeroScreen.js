import React, { useLayoutEffect } from 'react';
import { ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import Caption from '../../components/Caption';
import HeroHeader from './components/HeroHeader';
import HeroAscension from './components/HeroAscension';

function HeroScreen(props) {
    const { route, navigation } = props;
    const { hero } = route.params;
    const { category, images, info, playerInfo } = hero;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: info.name.toUpperCase(),
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

    function logout() {
        Firebase.auth().signOut()
            .then(() => {
                navigation.navigate('login');
            });
    }

    function getUri(uri) {
        return { uri };
    }

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
                    <View style={styles.editContainer}>
                        <View style={styles.rowContainer}>
                            <View>
                                <Caption>Ascension</Caption>
                            </View>
                            <View>
                                <Caption>Signature Item</Caption>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        width: '100%',
        height: '100%',
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
    subtitle2: {
        fontSize: typography.fontSize.subtitle2,
        fontFamily: typography.fontFamily.regular,
        textAlign: 'center',
        color: colors.text,
        marginBottom: 8,
    },
    editContainer: {
        marginTop: 24,
    },
    rowContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
});

export default HeroScreen;

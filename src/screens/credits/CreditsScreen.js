import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import theme from '../../theme/theme';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import PageHeader from '../../components/PageHeader';

function CreditsScreen(props) {
    const { navigation } = props;

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

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <PageHeader
                    title='Credits'
                    subtitle='Who to blame'
                />
                <Text style={styles.about}>
                    <Text style={styles.aboutBigger}>Phellipe, Jeff, Caio</Text>
                    {'\n'}
                    For all the help with the system itself and putting info into it!
                    {'\n\n\n'}
                    <Text style={styles.aboutBigger}>AFK Arena Fandom</Text>
                    {'\n'}
                    For providing great assets and info.
                    {'\n\n\n'}
                    <Text style={styles.aboutBigger}>Lilith</Text>
                    {'\n'}
                    For the game development :)
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 4,
        backgroundColor: colors.background,
    },
    subContainer: {
        flex: 1,
        padding: 16,
        borderRadius: 4,
        backgroundColor: colors.white,
        paddingHorizontal: 8,
    },
    goBack: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
    },
    about: {
        color: colors.text,
        fontSize: typography.fontSize.body2,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.body2,
    },
    aboutBigger: {
        fontSize: typography.fontSize.h6,
        letterSpacing: typography.letterSpacing.h6,
    },
});

export default CreditsScreen;

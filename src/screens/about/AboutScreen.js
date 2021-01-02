import React, { useLayoutEffect } from 'react';
import { Linking, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import theme from '../../theme/theme';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import PageHeader from '../../components/PageHeader';

function AboutScreen(props) {
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

    function openURL(linkTo) {
        Linking.canOpenURL(linkTo)
            .then((supported) => {
                if (supported) {
                    return Linking.openURL(linkTo);
                }
                return null;
            });
    }

    function renderLink(link, linkTo) {
        return (
            <Text
                style={styles.link}
                onPress={() => openURL(linkTo)}
            >
                {link}
            </Text>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <ScrollView>
                    <View>
                        <PageHeader
                            title='About'
                            subtitle='Why we did this project'
                        />
                        <Text style={styles.about}>
                            This project was released with the intention of better managing the heroes of the game AFK Arena.
                            {'\n\n'}
                            Me and some friends play this game for some time now, so I decided to put my development knowledge into practice and build this simple system,
                            if you want to check the code, it&apos;s available
                            {' '}
                            {renderLink('here', 'https://github.com/titorm/afk_arena_v2')}
                            .
                            {'\n\n'}
                            Of course these same friends of mine helped with the colors, layout, finding bugs
                            {' '}
                            and filling info all across the system. So a big thanks for them!
                            {'\n\n'}
                            I hope you enjoy our system and that it may be useful to you. If you have any suggestions, found any problems or just want to say something,
                            {' '}
                            please reach me in
                            {' '}
                            {renderLink('titomotter@gmail.com', 'mailto:titomotter@gmail.com')}
                            .
                            {'\n\n'}
                            This project is an adaptation of Phellipe&apos;s project. To access his project, it&apos;s available
                            {' '}
                            {renderLink('here', 'https://phellipeperin.github.io/afk/')}
                            . You can also check his code over
                            {' '}
                            {renderLink('here', 'https://github.com/phellipeperin/afk-arena-v2')}
                            .
                        </Text>
                    </View>
                </ScrollView>
            </View>
            <SafeAreaView />
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
    spacer: {
        marginTop: 24,
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
    linkContainer: {
        padding: 0,
        alignItems: 'baseline',
    },
    link: {
        color: 'blue',
        fontSize: typography.fontSize.body2,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.body2,
    },
});

export default AboutScreen;

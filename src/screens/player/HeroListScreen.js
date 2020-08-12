import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import HeroListContainer from './HeroListContainer';

function HeroListScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Hero List'.toUpperCase(),
            headerRight: () => (
                <Button
                    dark
                    color='white'
                    labelStyle={styles.logout}
                >
                    Logout
                </Button>
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.subtitle2}>All your heroes managed with ease</Text>
            <HeroListContainer />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingVertical: 8,
        paddingHorizontal: 4,
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
});

export default HeroListScreen;

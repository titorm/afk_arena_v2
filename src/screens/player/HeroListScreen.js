import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import HeroListContainer from './HeroListContainer';

function HeroListScreen(props) {
    const { navigation } = props;

    useLayoutEffect(() => {
        navigation.setOptions({
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

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.h4}>Hero List</Text>
                <Text style={styles.subtitle2}>All your heroes managed with ease</Text>
                <HeroListContainer />
            </View>
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
    subContainer: {
        flex: 1,
        borderRadius: 4,
        backgroundColor: colors.white,
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
    logout: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
    },
    h4: {
        color: colors.text,
        fontSize: typography.fontSize.h4,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
    },
    subtitle2: {
        color: colors.text,
        fontSize: typography.fontSize.subtitle2,
        textAlign: 'center',
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.h4,
        marginBottom: 8,
    },
});

export default HeroListScreen;

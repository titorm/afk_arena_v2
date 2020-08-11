import React, { useLayoutEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

function HeroList(props) {
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
            <Text style={styles.h3}>HeroList</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    logout: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
    },
    h3: {
        fontSize: typography.fontSize.h3,
        fontFamily: typography.fontFamily.thin,
        textTransform: typography.textTransform.uppercase,
        marginBottom: 12,
    },
});

export default HeroList;

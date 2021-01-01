import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TouchableWithoutFeedback } from 'react-native';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

const isAndroid = Platform.OS === 'android';

function ProfileScreen(props) {
    // eslint-disable-next-line no-unused-vars
    const { navigation } = props;

    return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                enabled
                behavior={isAndroid ? null : 'padding'}
                style={styles.container}
            />
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    divider: {
        flex: 1,
    },
    h3: {
        fontSize: typography.fontSize.h3,
        fontFamily: typography.fontFamily.light,
        textTransform: typography.textTransform.none,
        marginBottom: 12,
    },
    h6: {
        fontSize: typography.fontSize.h6,
        fontFamily: typography.fontFamily.light,
        textTransform: typography.textTransform.none,
        marginBottom: 12,
    },
    input: {
        marginTop: 12,
        width: '90%',
    },
    button: {
        marginTop: 12,
        width: '90%',
        padding: 8,
    },
});

export default ProfileScreen;

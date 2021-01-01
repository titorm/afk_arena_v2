import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import { setUser } from '../../store/modules/user/actions';

function ProfileScreen(props) {
    const { navigation } = props;

    const dispatch = useDispatch();

    function logout() {
        Firebase.auth().signOut()
            .then(() => {
                dispatch(setUser({}));
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'login' }],
                });
            });
    }

    function renderButton(label, onPress) {
        return (
            <TouchableOpacity
                style={styles.button}
                disabled={!onPress}
                onPress={onPress}
            >
                <Text style={styles.label(!onPress)}>{label}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Account</Text>
                {renderButton('Profile')}
                {renderButton('Sign-out', logout)}
                <View style={styles.spacer} />
                <Text style={styles.title}>Help</Text>
                {renderButton('Road Map')}
                {renderButton('About')}
                {renderButton('Credits')}
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
        alignItems: 'flex-start',
        borderRadius: 4,
        backgroundColor: colors.white,
        paddingHorizontal: 8,
    },
    spacer: {
        marginTop: 24,
    },
    title: {
        color: colors.secondary,
        fontSize: typography.fontSize.subtitle1,
        fontFamily: typography.fontFamily.regular,
        paddingLeft: 16,
        marginBottom: 16,
        letterSpacing: typography.letterSpacing.subtitle1,
        textTransform: typography.textTransform.uppercase,
    },
    button: {
        padding: 12,
        borderRadius: 4,
        marginBottom: 4,
    },
    label: (disabled) => ({
        color: disabled ? colors.disabled : colors.text,
        fontSize: typography.fontSize.subtitle2,
        fontFamily: typography.fontFamily.regular,
        textTransform: typography.textTransform.none,
    }),
});

export default ProfileScreen;

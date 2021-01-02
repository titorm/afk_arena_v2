import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

import Firebase from 'firebase';

import icons from '../../utils/icons';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import { setUser } from '../../store/modules/user/actions';

import Icon from '../../components/Icon';

function MoreScreen(props) {
    const { navigation } = props;

    const dispatch = useDispatch();

    function about() {
        navigation.navigate('about');
    }

    function credits() {
        navigation.navigate('credits');
    }

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

    function profile() {
        navigation.navigate('profile');
    }

    function changePassword() {
        navigation.navigate('changePassword');
    }

    function roadMap() {
        navigation.navigate('roadMap');
    }

    function renderButton(label, onPress, name) {
        return (
            <TouchableOpacity
                style={styles.button}
                disabled={!onPress}
                onPress={onPress}
            >
                {renderIcon(name, !onPress)}
                <Text style={styles.label(!onPress)}>{label}</Text>
            </TouchableOpacity>
        );
    }

    function renderIcon(name, disabled) {
        return (
            <Icon
                name={name}
                color={disabled ? colors.disabled : colors.secondary}
                type='regular'
            />
        );
    }

    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Account</Text>
                {renderButton('Profile', profile, icons.user_circle)}
                {renderButton('Change Password', changePassword, icons.lock_alt)}
                {renderButton('Sign-out', logout, icons.sign_out_alt)}
                <View style={styles.spacer} />
                <Text style={styles.title}>Help</Text>
                {renderButton('Road Map', roadMap, icons.flag)}
                {renderButton('About', about, icons.info_circle)}
                {renderButton('Credits', credits, icons.copyright)}
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
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 4,
        flexDirection: 'row',
    },
    label: (disabled) => ({
        color: disabled ? colors.disabled : colors.text,
        fontSize: typography.fontSize.subtitle2,
        marginLeft: 8,
        fontFamily: typography.fontFamily.regular,
        textTransform: typography.textTransform.none,
    }),
});

export default MoreScreen;

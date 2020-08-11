import React, { useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';
import feedbackService from '../../services/feedbackService';

import { setUser } from '../../store/modules/user/actions';

const isAndroid = Platform.OS === 'android';

const theme = {
    dark: true,
    mode: 'adaptive',
    colors: {
        primary: colors.primary,
        secondary: colors.secondary,
        background: colors.background,
        error: colors.error,
    },
    fonts: {
        fontFamily: typography.fontFamily.regular,
    },
};

function LoginScreen(props) {
    const { navigation } = props;
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onCreate, setOnCreate] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
        });
    }, [navigation]);

    function submit() {
        if (onCreate) {
            signUp();
        } else {
            login();
        }
    }

    async function signUp() {
        Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                Firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => {
                        dispatch(setUser(Firebase.auth().currentUser));
                        feedbackService.showSuccessMessage('Account created successfully!');
                        navigateToHeroList();
                    }).catch((error) => {
                        feedbackService.showErrorMessage(error.message);
                    });
            });
    }

    async function login() {
        Firebase.auth().setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
            .then(() => {
                Firebase.auth().signInWithEmailAndPassword(email, password)
                    .then(() => {
                        dispatch(setUser(Firebase.auth().currentUser));
                        navigateToHeroList();
                    }).catch((error) => {
                        feedbackService.showErrorMessage(error.message);
                    });
            });
    }

    function navigateToHeroList() {
        navigation.reset({
            index: 0,
            routes: [{ name: 'heroList' }],
        });
    }

    return (
        <TouchableWithoutFeedback
            style={styles.container}
            onPress={Keyboard.dismiss}
        >
            <KeyboardAvoidingView
                enabled
                behavior={isAndroid ? null : 'padding'}
                style={styles.container}
            >
                <Text style={styles.h3}>Login</Text>
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    autoCapitalize='none'
                    label='email'
                    keyboardType='email-address'
                    theme={theme}
                    onChangeText={setEmail}
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    mode='outlined'
                    autoCapitalize='none'
                    label='password'
                    theme={theme}
                    onChangeText={setPassword}
                />
                <Button
                    style={styles.button}
                    mode='contained'
                    color={colors.secondary}
                    onPress={submit}
                >
                    {onCreate ? 'Sign-Up' : 'Login'}
                </Button>
                <Button
                    style={styles.button}
                    mode='text'
                    color={colors.text}
                    onPress={() => setOnCreate(!onCreate)}
                >
                    {!onCreate ? 'Create an Account' : 'Go to Login'}
                </Button>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
    },
    h3: {
        fontSize: typography.fontSize.h3,
        fontFamily: typography.fontFamily.thin,
        textTransform: typography.textTransform.uppercase,
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

export default LoginScreen;

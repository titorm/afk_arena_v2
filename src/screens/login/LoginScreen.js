import React, { useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Firebase from 'firebase';

import theme from '../../theme/theme';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';
import feedbackService from '../../services/feedbackService';

import { setUser } from '../../store/modules/user/actions';

const isAndroid = Platform.OS === 'android';

function LoginScreen(props) {
    const { navigation } = props;
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [onCreate, setOnCreate] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Manager',
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
                <View style={styles.divider} />
                <Text style={styles.h3}>Login</Text>
                <Text style={styles.h6}>Glad to see you here :)</Text>
                <TextInput
                    style={styles.input}
                    mode='outlined'
                    autoCapitalize='none'
                    label='Email'
                    keyboardType='email-address'
                    theme={theme}
                    onChangeText={setEmail}
                />
                <TextInput
                    secureTextEntry
                    style={styles.input}
                    mode='outlined'
                    autoCapitalize='none'
                    label='Password'
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
                <View style={styles.divider} />
            </KeyboardAvoidingView>
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

export default LoginScreen;

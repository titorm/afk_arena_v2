import React, { useLayoutEffect, useState } from 'react';
import { Keyboard, SafeAreaView, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Firebase from 'firebase';

import theme from '../../theme/theme';
import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';
import feedbackService from '../../services/feedbackService';

import PageHeader from '../../components/PageHeader';

function ChangePasswordScreen(props) {
    const { navigation } = props;

    const user = Firebase.auth().currentUser;

    const [newPassword, setNewPassword] = useState('');

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

    function submit() {
        user.updatePassword(newPassword).then(() => {
            feedbackService.showSuccessMessage('Password updated successfully!');
            setNewPassword('');
        }).catch((error) => {
            feedbackService.showErrorMessage(error.message);
        });
    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}
        >
            <View style={styles.container}>
                <View style={styles.subContainer}>
                    <PageHeader
                        title='Recover Password'
                    />
                    <TextInput
                        mode='outlined'
                        label='New Password'
                        style={styles.input}
                        theme={theme}
                        value={newPassword}
                        secureTextEntry
                        onChangeText={setNewPassword}
                    />
                    <Button
                        dark
                        compact
                        mode='contained'
                        color={colors.secondary}
                        theme={theme}
                        style={styles.update}
                        labelStyle={styles.updateLabel}
                        width='100%'
                        onPress={submit}
                    >
                        Update Password
                    </Button>
                </View>
                <SafeAreaView />
            </View>
        </TouchableWithoutFeedback>
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
    goBack: {
        fontSize: typography.fontSize.overline,
        fontFamily: typography.fontFamily.light,
        letterSpacing: typography.letterSpacing.overline,
    },
    input: {
        width: '100%',
        color: colors.secondary,
        fontSize: typography.fontSize.body2,
        marginTop: 12,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.body2,
        backgroundColor: 'transparent',
    },
    update: {
        marginTop: 12,
    },
    updateLabel: {
        color: colors.white,
        fontSize: typography.fontSize.body2,
        fontFamily: typography.fontFamily.medium,
        letterSpacing: typography.letterSpacing.body2,
        textTransform: typography.textTransform.uppercase,
    },
});

export default ChangePasswordScreen;

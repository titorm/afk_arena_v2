import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../theme/colors/colors';

function LoginScreen() {
    return (
        <View style={styles.container}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});

export default LoginScreen;

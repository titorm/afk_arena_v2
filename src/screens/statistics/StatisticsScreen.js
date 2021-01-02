import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../theme/colors/colors';

import PageHeader from '../../components/PageHeader';
import StatisticsContainer from './StatisticsContainer';

function StatisticsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <PageHeader
                    title='Player Statistics'
                />
                <StatisticsContainer />
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
        borderRadius: 4,
        backgroundColor: colors.white,
        paddingVertical: 8,
        paddingHorizontal: 4,
    },
});

export default StatisticsScreen;

import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';
import playerHeroService from '../../services/playerHeroService';

import Loading from '../../components/Loading/Loading';
import Statistics from './Statistics';

function StatisticsContainer() {
    const [loading, setLoading] = useState(true);
    const [heroList, setHeroList] = useState([]);

    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (user && user.uid) {
            loadHeroList();
        }
    }, [user]);

    useEffect(() => {
        if (user && user.uid) {
            loadHeroList();
        }
    }, [user]);

    async function loadHeroList() {
        setHeroList(await playerHeroService.getPlayerHeroList(user.uid));
        setLoading(false);
    }

    if (loading) {
        return <Loading />;
    }
    return (
        <SafeAreaView style={styles.container}>
            <Statistics heroList={heroList} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    caption: {
        letterSpacing: typography.letterSpacing.caption,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.semiBold,
        textTransform: typography.textTransform.uppercase,
        color: colors.primary,
    },
});

export default StatisticsContainer;

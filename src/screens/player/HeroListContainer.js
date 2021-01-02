import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import Firebase from 'firebase';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import Loading from '../../components/Loading/Loading';
import HeroList from './HeroList';

function HeroListContainer() {
    const navigation = useNavigation();

    const [loading, setLoading] = useState(true);
    const [heroList, setHeroList] = useState([]);

    const { user } = useSelector((state) => state.user);

    useEffect(() => {
        if (user && user.uid) {
            loadHeroList();
        }
    }, [user]);

    async function loadHeroList() {
        const { docs: adminDocs } = await Firebase.firestore().collection('heroes').orderBy('info.name', 'asc').get();
        const adminHeroList = adminDocs.map((doc) => ({ id: doc.id, ...doc.data() }));

        const playerDoc = await Firebase.firestore().collection('players').doc(user.uid).get();
        let playerHeroList = [];
        if (playerDoc && playerDoc.exists) {
            const data = playerDoc.data();
            if (data.heroList && data.heroList.length) playerHeroList = data.heroList;
        }

        const playerMissingHeroesStruct = [];
        adminHeroList.forEach((adminHero) => {
            const index = playerHeroList.findIndex((elem) => elem.heroId === adminHero.id);
            if (index === -1) {
                playerMissingHeroesStruct.push(getPlayerHeroBaseStruct(adminHero.id));
            }
        });
        if (playerMissingHeroesStruct.length) {
            playerHeroList = [...playerHeroList, ...playerMissingHeroesStruct];
            await Firebase.firestore().collection('players').doc(user.uid).set({ heroList: playerHeroList }, { merge: true });
        }

        setHeroList(mergeAdminAndPlayerHeroList(adminHeroList, playerHeroList));
        setLoading(false);
    }

    function mergeAdminAndPlayerHeroList(adminHeroList, playerHeroList) {
        return adminHeroList.map((adminElem) => {
            const playerElem = playerHeroList.find((elem) => elem.heroId === adminElem.id);
            return {
                ...adminElem,
                playerInfo: playerElem,
            };
        });
    }

    function getPlayerHeroBaseStruct(heroId) {
        return {
            heroId,
            ascension: 'NONE',
            signatureItem: -1,
            equipment: {
                weapon: getPlayerHeroEquipBaseStruct(),
                head: getPlayerHeroEquipBaseStruct(),
                body: getPlayerHeroEquipBaseStruct(),
                feet: getPlayerHeroEquipBaseStruct(),
            },
            furniture: {
                large: [getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct()],
                small: [getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct()],
                hanging: [getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct(), getPlayerHeroFurnitureBaseStruct()],
            },
        };
    }

    function getPlayerHeroEquipBaseStruct() {
        return { acquired: false, stars: 0, tier: 0 };
    }

    function getPlayerHeroFurnitureBaseStruct() {
        return { acquired: false, plus: 0 };
    }

    function editHero(heroId) {
        navigation.navigate('hero', { heroId });
    }

    if (loading) {
        return <Loading />;
    }
    return (
        <SafeAreaView style={styles.container}>
            <HeroList
                editHero={editHero}
                heroList={heroList}
            />
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

export default HeroListContainer;

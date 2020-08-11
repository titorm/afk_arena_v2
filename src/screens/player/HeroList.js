import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import colors from '../../theme/colors/colors';
import typography from '../../theme/typography';

import objectService from '../../services/objectService';
import SearchContainer from '../../components/SearchContainer';

function HeroList({ editHero, heroList }) {
    const [filteredHeroList, setFilteredHeroList] = useState([]);

    function changeFilter(filterState, sort) {
        const text = filterState.text.toLowerCase();
        const possibleHeroList = heroList.filter((hero) => {
            const equalsText = !text || (hero.info.name.toLowerCase().includes(text) || hero.info.title.toLowerCase().includes(text));
            const equalsFaction = filterState.faction === 'all' || hero.category.faction === filterState.faction;
            const equalsType = filterState.type === 'all' || hero.category.type === filterState.type;
            const equalsClass = filterState.class === 'all' || hero.category.class === filterState.class;
            const equalsRole = filterState.role === 'all' || hero.category.role === filterState.role;

            return equalsText && equalsFaction && equalsType && equalsClass && equalsRole;
        });

        possibleHeroList.sort((a, b) => {
            if (!sort.property || sort.property === '-') return 0;
            const aValue = objectService.getNestedPropertyValue(a, sort.property);
            const bValue = objectService.getNestedPropertyValue(b, sort.property);
            if (aValue < bValue) return sort.reverse ? 1 : -1;
            if (aValue > bValue) return sort.reverse ? -1 : 1;
            return 0;
        });

        setFilteredHeroList(possibleHeroList);
    }

    return (
        <View style={styles.container}>
            <SearchContainer
                callback={changeFilter}
            />

            <Text style={styles.caption}>{`Result (${filteredHeroList.length} of ${heroList.length})`}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    caption: {
        letterSpacing: typography.letterSpacing.caption,
        fontSize: typography.fontSize.caption,
        fontFamily: typography.fontFamily.semiBold,
        textTransform: typography.textTransform.uppercase,
        color: colors.primary,
    },
});

export default HeroList;

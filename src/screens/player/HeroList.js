import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import filterService from '../../services/filterService';
import objectService from '../../services/objectService';

import Caption from '../../components/Caption';
import HeroItem from './HeroItem';
import SearchContainer from '../../components/SearchContainer';

function HeroList(props) {
    const { editHero, heroList } = props;

    const [filteredHeroList, setFilteredHeroList] = useState(heroList);

    function changeFilter(filterState, sort) {
        const possibleHeroList = filterService.filterHeroList(heroList, filterState);

        possibleHeroList.sort((a, b) => {
            if (!sort.property || sort.property === '-') {
                return 0;
            }
            const aValue = objectService.getNestedPropertyValue(a, sort.property);
            const bValue = objectService.getNestedPropertyValue(b, sort.property);
            if (aValue < bValue) {
                return sort.reverse ? 1 : -1;
            }
            if (aValue > bValue) {
                return sort.reverse ? -1 : 1;
            }
            return 0;
        });

        setFilteredHeroList(possibleHeroList);
    }

    function renderItem({ item }) {
        return (
            <HeroItem
                editHero={editHero}
                hero={item}
            />
        );
    }

    return (
        <View style={styles.container}>
            <SearchContainer
                callback={changeFilter}
            />

            <Caption style={styles.caption}>{`Result (${filteredHeroList.length} of ${heroList.length})`}</Caption>

            <FlatList
                style={styles.flatListCotainer}
                data={filteredHeroList}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    caption: {
        marginHorizontal: 4,
    },
    flatListCotainer: {
        flex: 1,
        marginTop: 4,
    },
});

export default HeroList;

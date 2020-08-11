/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';

import theme from '../theme/theme';
import colors from '../theme/colors/colors';
import Caption from '../components/Caption';

import { factionOptionList, typeOptionList, classOptionList, roleOptionList } from '../services/infoService';

function HeroListContainer({ callback }) {
    const possibleSortOptions = [
        { id: 'NAME_ASC', property: 'info.name', reverse: false, label: 'Name (A-Z)' },
        { id: 'NAME_DESC', property: 'info.name', reverse: true, label: 'Name (Z-A)' },
        { id: 'TITLE_ASC', property: 'info.title', reverse: false, label: 'Title (A-Z)' },
        { id: 'TITLE_DESC', property: 'info.title', reverse: true, label: 'Title (Z-A)' },
        { id: 'FACTION_ASC', property: 'category.faction', reverse: false, label: 'Faction' },
        { id: 'TYPE_ASC', property: 'category.type', reverse: false, label: 'Type' },
        { id: 'CLASS_ASC', property: 'category.class', reverse: false, label: 'Class' },
        { id: 'ROLE_ASC', property: 'category.role', reverse: false, label: 'Role' },
    ];

    const [data, setData] = useState({
        text: '',
        faction: 'all',
        type: 'all',
        class: 'all',
        role: 'all',
    });
    const [sort, setSort] = useState(possibleSortOptions[0]);

    useEffect(() => {
        if (callback) {
            callback(data, sort);
        }
    }, [data, sort]);

    function change(event) {
        const newData = { ...data, [event.target.name]: event.target.value };
        setData(newData);
    }

    function changeSort(event) {
        setSort(possibleSortOptions.find((elem) => elem.id === event.target.value));
    }

    return (
        <View style={styles.container}>
            <Caption>Filters</Caption>
            <View style={styles.searchContainer}>
                <TextInput
                    dense
                    mode='outlined'
                    style={styles.input}
                    label='Text'
                    theme={theme}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 12,
    },
    searchContainer: {
        marginTop: 8,
        flexDirection: 'row',
    },
    input: {
        flex: 1,
        backgroundColor: colors.background,
    },
});

export default HeroListContainer;

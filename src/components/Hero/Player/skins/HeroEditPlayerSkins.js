import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import typography from '../../../../theme/typography';

import CheckBox from '../../../CheckBox';

function HeroEditPlayerSkins(props) {
    const { hero, update } = props;

    const heroAcquired = hero.playerInfo.ascension !== 'NONE';

    // methos
    function updateSkin(acquired, pos) {
        let newSkins = [...hero.playerInfo.acquiredSkinList];
        if (acquired) {
            newSkins.push(pos);
        } else {
            newSkins = newSkins.filter((elem) => elem !== pos);
        }
        update(newSkins);
    }

    // render
    function renderHeroSkins() {
        return hero.skins.map((skin, index) => {
            const checked = hero.playerInfo.acquiredSkinList.includes(index);
            const onPress = heroAcquired ? () => updateSkin(!checked, index) : null;
            return (
                <View
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    style={styles.skinContainer}
                >
                    <Image
                        style={styles.image}
                        source={{ uri: skin.images.profile }}
                    />
                    <Text style={styles.skinName}>{skin.info.name}</Text>
                    <CheckBox
                        checked={checked}
                        style={styles.checkbox}
                        onPress={onPress}
                    />
                </View>
            );
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.skinsContainer}>
                <View style={styles.skinContainer}>
                    <Image
                        style={styles.image}
                        source={{ uri: hero.images.profile }}
                    />
                    <Text style={styles.skinName}>Default</Text>
                    <CheckBox
                        checked
                        disabled
                        style={styles.checkbox}
                    />
                </View>
                {renderHeroSkins()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: 56,
        height: 56,
        borderRadius: 4,
    },
    skinsContainer: {
        marginTop: 12,
        flexDirection: 'row',
    },
    skinContainer: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
    skinName: {
        marginTop: 4,
        fontFamily: typography.fontFamily.regular,
        letterSpacing: typography.letterSpacing.regular,
    },
    checkbox: {
        alignItems: 'center',
    },
});

export default HeroEditPlayerSkins;

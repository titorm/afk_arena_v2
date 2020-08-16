import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { Avatar } from 'react-native-paper';

import theme from '../../../theme/theme';
import colors from '../../../theme/colors/colors';
import Caption from '../../Caption';

function HeroSkins(props) {
    const { hero, update } = props;
    const size = 72;

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
                    <Avatar.Image
                        size={size}
                        source={{ uri: skin.images.profile }}
                        theme={theme}
                    />
                    <CheckBox
                        checkedColor={colors.primary}
                        containerStyle={styles.checkBoxContainer}
                        checked={checked}
                        onPress={onPress}
                    />
                </View>
            );
        });
    }

    return (
        <View style={styles.container}>
            <Caption>Skins</Caption>
            <View style={styles.skinsContainer}>
                <View style={styles.skinContainer}>
                    <Avatar.Image
                        size={size}
                        source={{ uri: hero.images.profile }}
                        theme={theme}
                    />
                    <CheckBox
                        checkedColor={colors.primary}
                        containerStyle={styles.checkBoxContainer}
                        checked
                    />
                </View>
                {renderHeroSkins()}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 24,
        alignItems: 'center',
    },
    skinsContainer: {
        marginTop: 12,
        flexDirection: 'row',
    },
    skinContainer: {
        alignItems: 'center',
        marginHorizontal: 8,
    },
});

export default HeroSkins;

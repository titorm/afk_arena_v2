import lightbearer from '../../assets/images/faction/lightbearer.png';
import mauler from '../../assets/images/faction/mauler.png';
import wilder from '../../assets/images/faction/wilder.png';
import graveborn from '../../assets/images/faction/graveborn.png';
import celestial from '../../assets/images/faction/celestial.png';
import hypogean from '../../assets/images/faction/hypogean.png';
import dimensional from '../../assets/images/faction/dimensional.png';

import dex from '../../assets/images/type/dex.png';
import int from '../../assets/images/type/int.png';
import str from '../../assets/images/type/str.png';

import mage from '../../assets/images/class/mage.png';
import ranger from '../../assets/images/class/ranger.png';
import support from '../../assets/images/class/support.png';
import tank from '../../assets/images/class/tank.png';
import warrior from '../../assets/images/class/warrior.png';

import aoe from '../../assets/images/role/aoe.png';
import assassin from '../../assets/images/role/assassin.png';
import buffer from '../../assets/images/role/buffer.png';
import burstDamage from '../../assets/images/role/burst_damage.png';
import continuousDamage from '../../assets/images/role/continuous_damage.png';
import control from '../../assets/images/role/control.png';
import debuffer from '../../assets/images/role/debuffer.png';
import regen from '../../assets/images/role/regen.png';
import tankRole from '../../assets/images/role/tank.png';

import elite from '../../assets/images/ascension/elite.png';
import legendary from '../../assets/images/ascension/legendary.png';
import mythic from '../../assets/images/ascension/mythic.png';
import ascended from '../../assets/images/ascension/ascended.png';

import dexBodyBase from '../../assets/images/equips/dex_body_base.jpg';
import dexBodyT0 from '../../assets/images/equips/dex_body_t_0.jpg';
import dexBodyT1 from '../../assets/images/equips/dex_body_t_1.jpg';
import dexBodyT2 from '../../assets/images/equips/dex_body_t_2.jpg';
import dexFeetBase from '../../assets/images/equips/dex_feet_base.jpg';
import dexFeetT0 from '../../assets/images/equips/dex_feet_t_0.jpg';
import dexFeetT1 from '../../assets/images/equips/dex_feet_t_1.jpg';
import dexFeetT2 from '../../assets/images/equips/dex_feet_t_2.jpg';
import dexHeadBase from '../../assets/images/equips/dex_head_base.jpg';
import dexHeadT0 from '../../assets/images/equips/dex_head_t_0.jpg';
import dexHeadT1 from '../../assets/images/equips/dex_head_t_1.jpg';
import dexHeadT2 from '../../assets/images/equips/dex_head_t_2.jpg';
import dexWeaponBase from '../../assets/images/equips/dex_weapon_base.jpg';
import dexWeaponT0 from '../../assets/images/equips/dex_weapon_t_0.jpg';
import dexWeaponT1 from '../../assets/images/equips/dex_weapon_t_1.jpg';
import dexWeaponT2 from '../../assets/images/equips/dex_weapon_t_2.jpg';

import intBodyBase from '../../assets/images/equips/int_body_base.jpg';
import intBodyT0 from '../../assets/images/equips/int_body_t_0.jpg';
import intBodyT1 from '../../assets/images/equips/int_body_t_1.jpg';
import intBodyT2 from '../../assets/images/equips/int_body_t_2.jpg';
import intFeetBase from '../../assets/images/equips/int_feet_base.jpg';
import intFeetT0 from '../../assets/images/equips/int_feet_t_0.jpg';
import intFeetT1 from '../../assets/images/equips/int_feet_t_1.jpg';
import intFeetT2 from '../../assets/images/equips/int_feet_t_2.jpg';
import intHeadBase from '../../assets/images/equips/int_head_base.jpg';
import intHeadT0 from '../../assets/images/equips/int_head_t_0.jpg';
import intHeadT1 from '../../assets/images/equips/int_head_t_1.jpg';
import intHeadT2 from '../../assets/images/equips/int_head_t_2.jpg';
import intWeaponBase from '../../assets/images/equips/int_weapon_base.jpg';
import intWeaponT0 from '../../assets/images/equips/int_weapon_t_0.jpg';
import intWeaponT1 from '../../assets/images/equips/int_weapon_t_1.jpg';
import intWeaponT2 from '../../assets/images/equips/int_weapon_t_2.jpg';

import strBodyBase from '../../assets/images/equips/str_body_base.jpg';
import strBodyT0 from '../../assets/images/equips/str_body_t_0.jpg';
import strBodyT1 from '../../assets/images/equips/str_body_t_1.jpg';
import strBodyT2 from '../../assets/images/equips/str_body_t_2.jpg';
import strFeetBase from '../../assets/images/equips/str_feet_base.jpg';
import strFeetT0 from '../../assets/images/equips/str_feet_t_0.jpg';
import strFeetT1 from '../../assets/images/equips/str_feet_t_1.jpg';
import strFeetT2 from '../../assets/images/equips/str_feet_t_2.jpg';
import strHeadBase from '../../assets/images/equips/str_head_base.jpg';
import strHeadT0 from '../../assets/images/equips/str_head_t_0.jpg';
import strHeadT1 from '../../assets/images/equips/str_head_t_1.jpg';
import strHeadT2 from '../../assets/images/equips/str_head_t_2.jpg';
import strWeaponBase from '../../assets/images/equips/str_weapon_base.jpg';
import strWeaponT0 from '../../assets/images/equips/str_weapon_t_0.jpg';
import strWeaponT1 from '../../assets/images/equips/str_weapon_t_1.jpg';
import strWeaponT2 from '../../assets/images/equips/str_weapon_t_2.jpg';

const heroService = {
    getHeroFaction(faction) {
        if (faction === 'LIGHTBEARER') return lightbearer;
        if (faction === 'MAULER') return mauler;
        if (faction === 'WILDER') return wilder;
        if (faction === 'GRAVEBORN') return graveborn;
        if (faction === 'CELESTIAL') return celestial;
        if (faction === 'HYPOGEAN') return hypogean;
        if (faction === 'DIMENSIONAL') return dimensional;
        return '';
    },
    getHeroType(type) {
        if (type === 'DEX') return dex;
        if (type === 'INT') return int;
        if (type === 'STR') return str;
        return '';
    },
    getHeroClass(heroClass) {
        if (heroClass === 'MAGE') return mage;
        if (heroClass === 'RANGER') return ranger;
        if (heroClass === 'SUPPORT') return support;
        if (heroClass === 'TANK') return tank;
        if (heroClass === 'WARRIOR') return warrior;
        return '';
    },
    getHeroRole(role) {
        if (role === 'AOE') return aoe;
        if (role === 'ASSASSIN') return assassin;
        if (role === 'BUFFER') return buffer;
        if (role === 'BURST_DAMAGE') return burstDamage;
        if (role === 'CONTINUOUS_DAMAGE') return continuousDamage;
        if (role === 'CONTROL') return control;
        if (role === 'DEBUFFER') return debuffer;
        if (role === 'REGEN') return regen;
        if (role === 'TANK') return tankRole;
        return '';
    },
    getHeroAscension(ascension) {
        if (ascension === 'ELITE' || ascension === 'ELITE_PLUS') return elite;
        if (ascension === 'LEGENDARY' || ascension === 'LEGENDARY_PLUS') return legendary;
        if (ascension === 'MYTHIC' || ascension === 'MYTHIC_PLUS') return mythic;
        if (ascension === 'ASCENDED_0' || ascension === 'ASCENDED_1' || ascension === 'ASCENDED_2'
            || ascension === 'ASCENDED_3' || ascension === 'ASCENDED_4' || ascension === 'ASCENDED_5') return ascended;
        return '';
    },
    getEquipment(heroType, equipType, acquired, tier) {
        const equipUppercase = equipType.toUpperCase();
        if (heroType === 'DEX') {
            if (equipUppercase === 'BODY') {
                if (!acquired) return dexBodyBase;
                if (tier === 0) return dexBodyT0;
                if (tier === 1) return dexBodyT1;
                if (tier === 2) return dexBodyT2;
            }
            if (equipUppercase === 'FEET') {
                if (!acquired) return dexFeetBase;
                if (tier === 0) return dexFeetT0;
                if (tier === 1) return dexFeetT1;
                if (tier === 2) return dexFeetT2;
            }
            if (equipUppercase === 'HEAD') {
                if (!acquired) return dexHeadBase;
                if (tier === 0) return dexHeadT0;
                if (tier === 1) return dexHeadT1;
                if (tier === 2) return dexHeadT2;
            }
            if (equipUppercase === 'WEAPON') {
                if (!acquired) return dexWeaponBase;
                if (tier === 0) return dexWeaponT0;
                if (tier === 1) return dexWeaponT1;
                if (tier === 2) return dexWeaponT2;
            }
        }
        if (heroType === 'INT') {
            if (equipUppercase === 'BODY') {
                if (!acquired) return intBodyBase;
                if (tier === 0) return intBodyT0;
                if (tier === 1) return intBodyT1;
                if (tier === 2) return intBodyT2;
            }
            if (equipUppercase === 'FEET') {
                if (!acquired) return intFeetBase;
                if (tier === 0) return intFeetT0;
                if (tier === 1) return intFeetT1;
                if (tier === 2) return intFeetT2;
            }
            if (equipUppercase === 'HEAD') {
                if (!acquired) return intHeadBase;
                if (tier === 0) return intHeadT0;
                if (tier === 1) return intHeadT1;
                if (tier === 2) return intHeadT2;
            }
            if (equipUppercase === 'WEAPON') {
                if (!acquired) return intWeaponBase;
                if (tier === 0) return intWeaponT0;
                if (tier === 1) return intWeaponT1;
                if (tier === 2) return intWeaponT2;
            }
        }
        if (heroType === 'STR') {
            if (equipUppercase === 'BODY') {
                if (!acquired) return strBodyBase;
                if (tier === 0) return strBodyT0;
                if (tier === 1) return strBodyT1;
                if (tier === 2) return strBodyT2;
            }
            if (equipUppercase === 'FEET') {
                if (!acquired) return strFeetBase;
                if (tier === 0) return strFeetT0;
                if (tier === 1) return strFeetT1;
                if (tier === 2) return strFeetT2;
            }
            if (equipUppercase === 'HEAD') {
                if (!acquired) return strHeadBase;
                if (tier === 0) return strHeadT0;
                if (tier === 1) return strHeadT1;
                if (tier === 2) return strHeadT2;
            }
            if (equipUppercase === 'WEAPON') {
                if (!acquired) return strWeaponBase;
                if (tier === 0) return strWeaponT0;
                if (tier === 1) return strWeaponT1;
                if (tier === 2) return strWeaponT2;
            }
        }
        return '';
    },
};

export default heroService;

import colors from '../theme/colors/colors';

import heroService from './heroService';

const ascensionChartOptions = [
    { label: 'Not Acquired', values: ['NONE'], color: colors.chartNone },
    { label: 'Elite', values: ['ELITE', 'ELITE_PLUS'], color: colors.chartElite },
    { label: 'Legendary', values: ['LEGENDARY', 'LEGENDARY_PLUS'], color: colors.chartLegendary },
    { label: 'Mythic', values: ['MYTHIC', 'MYTHIC_PLUS'], color: colors.chartMythic },
    { label: 'Ascended', values: ['ASCENDED_0', 'ASCENDED_1', 'ASCENDED_2', 'ASCENDED_3', 'ASCENDED_4'], color: colors.chartAscended },
    { label: 'Ascended Max', values: ['ASCENDED_5'], color: colors.chartAscendedMax },
];

const signatureItemChartOptions = [
    { label: 'Not Unlocked', valueMin: -1, valueMax: -1, color: colors.chartNone },
    { label: '0-9', valueMin: 0, valueMax: 9, color: colors.chartElite },
    { label: '10-19', valueMin: 10, valueMax: 19, color: colors.chartLegendary },
    { label: '20-29', valueMin: 20, valueMax: 29, color: colors.chartMythic },
    { label: '30+', valueMin: 30, valueMax: 40, color: colors.chartAscendedMax },
];

const furnitureChartOptions = [
    { label: 'Not Unlocked', valueMin: -1, valueMax: -1, color: colors.chartNone },
    { label: '0/9', valueMin: 0, valueMax: 0, color: colors.chartElite },
    { label: '1-2/9', valueMin: 1, valueMax: 2, color: colors.chartLegendary },
    { label: '3-8/9', valueMin: 3, valueMax: 3, color: colors.chartMythic },
    { label: '9/9', valueMin: 9, valueMax: 9, color: colors.chartAscendedMax },
];

const equipChartOptions = [
    { label: 'None Maxed', value: 0, color: colors.chartNone },
    { label: '1 Maxed', value: 1, color: colors.chartElite },
    { label: '2 Maxed', value: 2, color: colors.chartLegendary },
    { label: '3 Maxed', value: 3, color: colors.chartMythic },
    { label: 'All Maxed', value: 4, color: colors.chartAscendedMax },
];

const equipKeys = ['weapon', 'head', 'body', 'feet'];

export default {
    getAscensionStats(heroList) {
        const data = [];
        ascensionChartOptions.forEach((option) => {
            data.push({
                id: option.label,
                label: option.label,
                y: heroList.filter((hero) => option.values.includes(hero.playerInfo.ascension)).length,
                color: option.color,
            });
        });
        return data;
    },
    getSignatureItemStats(heroList) {
        const data = [];
        signatureItemChartOptions.forEach((option) => {
            data.push({
                id: option.label,
                label: option.label,
                y: heroList.filter((hero) => hero.playerInfo.signatureItem >= option.valueMin && hero.playerInfo.signatureItem <= option.valueMax).length,
                color: option.color,
            });
        });
        return data;
    },
    getFurnitureStats(heroList) {
        const getAmountOfAcquiredFurniture = (hero) => {
            if (!heroService.isFurnitureAvailable(hero.playerInfo.ascension)) return -1;
            const { furniture } = hero.playerInfo;
            let total = 0;
            total += furniture.large.filter((elem) => elem.acquired).length;
            total += furniture.small.filter((elem) => elem.acquired).length;
            total += furniture.hanging.filter((elem) => elem.acquired).length;
            return total;
        };

        const heroesFurnitureCount = heroList.map((hero) => getAmountOfAcquiredFurniture(hero));
        const data = [];
        furnitureChartOptions.forEach((option) => {
            data.push({
                id: option.label,
                label: option.label,
                y: heroesFurnitureCount.filter((count) => count >= option.valueMin && count <= option.valueMax).length,
                color: option.color,
            });
        });
        return data;
    },
    getEquipmentStats(heroList) {
        const getAmountOfMaxedEquips = (hero) => {
            const { equipment } = hero.playerInfo;
            let total = 0;
            equipKeys.forEach((elem) => {
                const equip = equipment[elem];
                if (equip.acquired && equip.faction === hero.category.faction && equip.stars === 5 && equip.tier === 2) {
                    total += 1;
                }
            });
            return total;
        };

        const heroesMaxedEquipsCount = heroList.map((hero) => getAmountOfMaxedEquips(hero));
        const data = [];
        equipChartOptions.forEach((option) => {
            data.push({
                id: option.label,
                label: option.label,
                y: heroesMaxedEquipsCount.filter((count) => count === option.value).length,
                color: option.color,
            });
        });
        return data;
        // const equipsData = {};
        // equipKeys.forEach((elem) => { equipsData[elem] = []; });

        // heroList.forEach((hero) => {
        //     const { equipment } = hero.playerInfo;
        //     equipKeys.forEach((elem) => {
        //         const equip = equipment[elem];
        //         if (equip.acquired) {
        //             equipsData[elem].push({ ...equip, faction: equip.faction === hero.category.faction });
        //         } else {
        //             equipsData[elem].push({ ...equip, faction: false, stars: 0, tier: 0 });
        //         }
        //     });
        // });

        // const equipsDetailedData = {};
        // equipKeys.forEach((elem) => {
        //     let notAcquired = 0;
        //     const acquiredRightFaction = {
        //         0: { maxStar: 0, notMaxStar: 0 },
        //         1: { maxStar: 0, notMaxStar: 0 },
        //         2: { maxStar: 0, notMaxStar: 0 },
        //     };
        //     const acquiredWrongFaction = {
        //         0: { maxStar: 0, notMaxStar: 0 },
        //         1: { maxStar: 0, notMaxStar: 0 },
        //         2: { maxStar: 0, notMaxStar: 0 },
        //     };

        //     equipsData[elem].forEach((equip) => {
        //         if (equip.acquired) {
        //             if (equip.faction) {
        //                 acquiredRightFaction[equip.tier][equip.stars === 5 ? 'maxStar' : 'notMaxStar'] += 1;
        //             } else {
        //                 acquiredWrongFaction[equip.tier][equip.stars === 5 ? 'maxStar' : 'notMaxStar'] += 1;
        //             }
        //         } else {
        //             notAcquired += 1;
        //         }
        //     });

        //     equipsDetailedData[elem] = {
        //         notAcquired,
        //         acquiredRightFaction,
        //         acquiredWrongFaction,
        //     };
        // });

        // const children = [];
        // equipKeys.forEach((elem) => {
        //     children.push({
        //         name: elem,
        //         children: [
        //             {
        //                 name: `${elem} Not Acquired`,
        //                 value: equipsDetailedData[elem].notAcquired,
        //             },
        //             {
        //                 name: `${elem} Acquired`,
        //                 children: [
        //                     {
        //                         name: `${elem} Right Faction`,
        //                         children: [
        //                             {
        //                                 name: `${elem} Right Faction T0`,
        //                                 children: [
        //                                     {
        //                                         name: `${elem} Right Faction T0 - Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredRightFaction[0].maxStar,
        //                                     },
        //                                     {
        //                                         name: `${elem} Right Faction T0 - Not Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredRightFaction[0].notMaxStar,
        //                                     },
        //                                 ],
        //                             },
        //                             {
        //                                 name: `${elem} Right Faction T1`,
        //                                 children: [
        //                                     {
        //                                         name: `${elem} Right Faction T1 - Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredRightFaction[1].maxStar,
        //                                     },
        //                                     {
        //                                         name: `${elem} Right Faction T1 - Not Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredRightFaction[1].notMaxStar,
        //                                     },
        //                                 ],
        //                             },
        //                             {
        //                                 name: `${elem} Right Faction T2`,
        //                                 children: [
        //                                     {
        //                                         name: `${elem} Right Faction T2 - Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredRightFaction[2].maxStar,
        //                                     },
        //                                     {
        //                                         name: `${elem} Right Faction T2 - Not Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredRightFaction[2].notMaxStar,
        //                                     },
        //                                 ],
        //                             },
        //                         ],
        //                     },
        //                     {
        //                         name: `${elem} No/Wrong Faction`,
        //                         children: [
        //                             {
        //                                 name: `${elem} No/Wrong Faction T0`,
        //                                 children: [
        //                                     {
        //                                         name: `${elem} No/Wrong Faction T0 - Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredWrongFaction[0].maxStar,
        //                                     },
        //                                     {
        //                                         name: `${elem} No/Wrong Faction T0 - Not Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredWrongFaction[0].notMaxStar,
        //                                     },
        //                                 ],
        //                             },
        //                             {
        //                                 name: `${elem} No/Wrong Faction T1`,
        //                                 children: [
        //                                     {
        //                                         name: `${elem} No/Wrong Faction T1 - Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredWrongFaction[1].maxStar,
        //                                     },
        //                                     {
        //                                         name: `${elem} No/Wrong Faction T1 - Not Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredWrongFaction[1].notMaxStar,
        //                                     },
        //                                 ],
        //                             },
        //                             {
        //                                 name: `${elem} No/Wrong Faction T2`,
        //                                 children: [
        //                                     {
        //                                         name: `${elem} No/Wrong Faction T2 - Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredWrongFaction[2].maxStar,
        //                                     },
        //                                     {
        //                                         name: `${elem} No/Wrong Faction T2 - Not Max Stars`,
        //                                         value: equipsDetailedData[elem].acquiredWrongFaction[2].notMaxStar,
        //                                     },
        //                                 ],
        //                             },
        //                         ],
        //                     },
        //                 ],
        //             },
        //         ],
        //     });
        // });

        // return { name: 'equipment', children };
    },
};

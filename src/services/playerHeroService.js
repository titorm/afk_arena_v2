import Firebase from 'firebase';

import formatService from './formatService';

const playerHeroService = {
    async getPlayerHeroList(userID) {
        const { docs: adminDocs } = await Firebase.firestore().collection('heroes').orderBy('info.name', 'asc').get();
        const adminHeroList = adminDocs.map((doc) => ({ id: doc.id, ...doc.data() }));

        const playerDoc = await Firebase.firestore().collection('players').doc(userID).get();
        let playerHeroList = [];
        if (playerDoc && playerDoc.exists) {
            const data = playerDoc.data();
            if (data.heroList && data.heroList.length) playerHeroList = data.heroList;
        }

        const playerMissingHeroesStruct = [];
        adminHeroList.forEach((adminHero) => {
            const index = playerHeroList.findIndex((elem) => elem.heroId === adminHero.id);
            if (index === -1) {
                playerMissingHeroesStruct.push(this.getPlayerHeroBaseStruct(adminHero.id));
            }
        });
        if (playerMissingHeroesStruct.length) {
            playerHeroList = [...playerHeroList, ...playerMissingHeroesStruct];
            await Firebase.firestore().collection('players').doc(userID).set({ heroList: playerHeroList }, { merge: true });
        }

        return this.mergeAdminAndPlayerHeroList(adminHeroList, playerHeroList);
    },
    mergeAdminAndPlayerHeroList(adminHeroList, playerHeroList) {
        return adminHeroList.map((adminElem) => {
            const playerElem = formatService.formatPlayerHeroData(adminElem, playerHeroList.find((elem) => elem.heroId === adminElem.id));
            return {
                ...adminElem,
                playerInfo: playerElem,
            };
        });
    },
    getPlayerHeroBaseStruct(heroId) {
        return {
            heroId,
            ascension: 'NONE',
            signatureItem: -1,
            equipment: {
                weapon: this.getPlayerHeroEquipBaseStruct(),
                head: this.getPlayerHeroEquipBaseStruct(),
                body: this.getPlayerHeroEquipBaseStruct(),
                feet: this.getPlayerHeroEquipBaseStruct(),
            },
            furniture: {
                large: [this.getPlayerHeroFurnitureBaseStruct(), this.getPlayerHeroFurnitureBaseStruct(), this.getPlayerHeroFurnitureBaseStruct()],
                small: [this.getPlayerHeroFurnitureBaseStruct(), this.getPlayerHeroFurnitureBaseStruct(), this.getPlayerHeroFurnitureBaseStruct()],
                hanging: [this.getPlayerHeroFurnitureBaseStruct(), this.getPlayerHeroFurnitureBaseStruct(), this.getPlayerHeroFurnitureBaseStruct()],
            },
            acquiredSkinList: [],
        };
    },
    getPlayerHeroEquipBaseStruct() {
        return { acquired: false, stars: 0, tier: 0 };
    },
    getPlayerHeroFurnitureBaseStruct() {
        return { acquired: false, plus: 0 };
    },
};

export default playerHeroService;

const formatService = {
    // This exists to format old patterns to new one
    // That's why we need explicit checks like === true
    formatPlayerHeroData(adminHero, playerHero) {
        const newData = { ...playerHero };
        // Equipment
        newData.equipment.weapon = this.formatPlayerEquipment(newData.equipment.weapon, adminHero.category.faction);
        newData.equipment.head = this.formatPlayerEquipment(newData.equipment.head, adminHero.category.faction);
        newData.equipment.body = this.formatPlayerEquipment(newData.equipment.body, adminHero.category.faction);
        newData.equipment.feet = this.formatPlayerEquipment(newData.equipment.feet, adminHero.category.faction);

        // Skins
        if (!newData.acquiredSkinList) {
            newData.acquiredSkinList = [];
        }

        // Crystal
        if (newData.onCrystal === undefined) {
            newData.onCrystal = false;
        }

        return newData;
    },
    formatPlayerEquipment(equip, heroFaction) {
        const newEquip = { ...equip };
        if (newEquip.faction === undefined || newEquip.faction === false) {
            newEquip.faction = 'NONE';
        }
        if (newEquip.faction === true) {
            newEquip.faction = heroFaction;
        }
        return newEquip;
    },
};

export default formatService;

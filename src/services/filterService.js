const filterService = {
    filterHeroList(heroList, filterState) {
        const text = filterState.text.toLowerCase();
        return heroList.filter((hero) => {
            const equalsText = !text || (hero.info.name.toLowerCase().includes(text) || hero.info.title.toLowerCase().includes(text));
            const equalsFaction = filterState.faction === 'all' || hero.category.faction === filterState.faction;
            const equalsType = filterState.type === 'all' || hero.category.type === filterState.type;
            const equalsClass = filterState.class === 'all' || hero.category.class === filterState.class;
            const equalsRole = filterState.role === 'all' || hero.category.role === filterState.role;

            return equalsText && equalsFaction && equalsType && equalsClass && equalsRole;
        });
    },
};

export default filterService;

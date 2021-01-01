const nextFeats = {
    high: [
        'Statistics on hero player list, like heroes obtained, missing gear, etc',
        'ADMIN: add field to input the hero furniture skill',
        'Bug fixing!',
    ],
    medium: [
        'Suggestion about how to reorganize gear to better match factions',
        'Calculate amount of sacrifice heroes necessary',
        'Artifact manager',
        'Profile Page',
        'Add a icon library to improve system layout',
    ],
    low: [
        'Sort Heroes faction by game order, not alphabetically',
        'Allow to input amount of copies obtained and show the amount remaining',
        'Share information about own heroes with other players',
        'Leaderboard and global comparison',
        'ADMIN: warn heroes that miss information',
    ],
};

const versions = [
    // {
    //     name: 'v1.2',
    //     date: '__.01.2021',
    //     released: [
    //     ],
    // },
    // {
    //     name: 'v1.1',
    //     date: '01.01.2021',
    //     released: [
    //         'Change Password Page',
    //         'Keep search state when returning to hero list',
    //         'Display ascended heroes stars on list page',
    //         'Improved equipment stars display',
    //         'Warning about heroes not on crystal',
    //     ],
    // },
    {
        name: 'v1.0',
        date: '31.12.2020',
        released: [
            'Initial version. Basic functionalities.',
        ],
    },
];

export { nextFeats, versions };

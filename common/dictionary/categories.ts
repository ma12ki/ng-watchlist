interface ICategory {
    _id: string;
    label: string;
    recurring: boolean;
    verbiage: {
      season: string;
      episode: string;
    };
}

const categories: ICategory[] = [
    {
        _id: 'MOVIE',
        label: 'Movie',
        recurring: false,
        verbiage: {
          season: '',
          episode: '',
        },
    },
    {
        _id: 'TVSHOW',
        label: 'TV Show',
        recurring: true,
        verbiage: {
          season: 'Season',
          episode: 'Episode',
        },
    },
    {
        _id: 'ANIME',
        label: 'Anime',
        recurring: true,
        verbiage: {
          season: 'Season',
          episode: 'Episode',
        },
    },
    {
        _id: 'COMIC',
        label: 'Comic',
        recurring: true,
        verbiage: {
          season: 'Year',
          episode: 'Issue',
        },
    },
];

export { categories, ICategory };

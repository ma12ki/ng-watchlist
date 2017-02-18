interface ICategory {
    _id: string;
    label: string;
    recurring: boolean;
}

const categories: ICategory[] = [
    {
        _id: 'MOVIE',
        label: 'Movie',
        recurring: false
    },
    {
        _id: 'TVSHOW',
        label: 'TV Show',
        recurring: true
    },
    {
        _id: 'ANIME',
        label: 'Anime',
        recurring: true
    },
    {
        _id: 'COMIC',
        label: 'Comic',
        recurring: true
    }
];

export { categories, ICategory };

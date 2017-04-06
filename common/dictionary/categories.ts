interface ICategoryVerbiage {
    season: string;
    episode: string;
}

interface ICategory {
    _id: string;
    label: string;
    recurring: boolean;
    icon: string;
    verbiage: ICategoryVerbiage;
}

const categories: ICategory[] = [
    {
        _id: 'MOVIE',
        label: 'Movie',
        recurring: false,
        icon: 'local_movies',
        verbiage: {
          season: '',
          episode: '',
        },
    },
    {
        _id: 'TVSHOW',
        label: 'TV Show',
        recurring: true,
        icon: 'tv',
        verbiage: {
          season: 'Season',
          episode: 'Episode',
        },
    },
    {
        _id: 'ANIME',
        label: 'Anime',
        recurring: true,
        icon: 'tv',
        verbiage: {
          season: 'Season',
          episode: 'Episode',
        },
    },
    {
        _id: 'COMIC',
        label: 'Comic',
        recurring: true,
        icon: 'developer_board',
        verbiage: {
          season: 'Year',
          episode: 'Issue',
        },
    },
];

const getCategory = (categoryId: string) => categories.find((category) => category._id === categoryId);

const getVerbiage = (categoryId: string): ICategoryVerbiage => {
  const category = getCategory(categoryId);
  return category ? category.verbiage : { season: '', episode: '' };
};

const isRecurring = (categoryId: string) => {
  const category = getCategory(categoryId);
  return category ? category.recurring : false;
};

export {
  ICategory,
  ICategoryVerbiage,
  categories,
  getCategory,
  getVerbiage,
  isRecurring,
};

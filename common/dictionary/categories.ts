interface ICategoryVerbiage {
    season: string;
    episode: string;
}

interface ICategory {
    _id: string;
    label: string;
    recurring: boolean;
    verbiage: ICategoryVerbiage;
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

const getCategory = (categoryId: string) => categories.find((category) => category._id === categoryId);

const getVerbiage = (categoryId: string) => {
  return getCategory(categoryId).verbiage;
};

const isRecurring = (categoryId: string) => {
  return getCategory(categoryId).recurring;
};

export {
  ICategory,
  ICategoryVerbiage,
  categories,
  getCategory,
  getVerbiage,
  isRecurring,
};

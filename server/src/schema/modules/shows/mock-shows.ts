import * as moment from 'moment';

export default [
  {
    _id: '1',
    name: 'Rick and Morty',
    category: 'TVSHOW',
    frequency: 'WEEKLY',
    premiereDate: moment().subtract(10, 'days').toISOString(),
    listed: true,
    tracked: true,
    episodes: [
      {
        _id: 'rm3.1',
        season: 3,
        episode: 1,
        premiereDate: moment().subtract(10, 'days').toISOString(),
        watched: true,
      },
      {
        _id: 'rm3.2',
        season: 3,
        episode: 2,
        premiereDate: moment().subtract(3, 'days').toISOString(),
        watched: false,
      },
      {
        _id: 'rm3.3',
        season: 3,
        episode: 3,
        premiereDate: moment().add(3, 'days').toISOString(),
        watched: false,
      },
    ],
  },
  {
    _id: '2',
    name: 'Logan',
    category: 'MOVIE',
    frequency: 'INSTANTLY',
    premiereDate: moment().subtract(5, 'days').toISOString(),
    listed: true,
    tracked: true,
    episodes: [
      {
        _id: 'l1.1',
        season: 1,
        episode: 1,
        premiereDate: moment().subtract(5, 'days').toISOString(),
        watched: false,
      },
      {
        _id: 'l1.2',
        season: 1,
        episode: 2,
        premiereDate: moment().add(1, 'days').toISOString(),
        watched: false,
      },
    ],
  }
];

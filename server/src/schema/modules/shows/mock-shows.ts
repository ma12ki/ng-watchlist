export default [
  {
    _id: '1',
    name: 'Rick and Morty',
    category: 'TVSHOW',
    frequency: 'WEEKLY',
    premiereDate: '2017-02-19T16:16:51.637Z',
    listed: true,
    tracked: true,
    episodes: [
      {
        _id: 'rm3.1',
        season: 3,
        episode: 1,
        premiereDate: '2017-02-19T16:16:51.637Z',
        watched: false,
      },
      {
        _id: 'rm3.2',
        season: 3,
        episode: 2,
        premiereDate: '2017-02-22T16:16:51.637Z',
        watched: false,
      },
      {
        _id: 'rm3.3',
        season: 3,
        episode: 3,
        premiereDate: '2017-02-26T16:16:51.637Z',
        watched: false,
      },
    ],
  },
  {
    _id: '2',
    name: 'Logan',
    category: 'MOVIE',
    frequency: 'INSTANTLY',
    premiereDate: '2017-03-03T16:16:51.637Z',
    listed: true,
    tracked: true,
    episodes: [
      {
        _id: 'l1.1',
        season: 1,
        episode: 1,
        premiereDate: '2017-03-03T16:16:51.637Z',
        watched: false,
      },
    ],
  }
];

import * as moment from 'moment';

import mockShows from './mock-shows';

export default {
  availableShows(...args) {
    const now = moment();
    console.log(args);
    return mockShows
      .filter((show) => {
        return moment(show.premiereDate).isBefore(now);
      }).map((show) => {
        show.episodes = show.episodes.filter((episode) => {
          return moment(episode.premiereDate).isBefore(now);
        });
        return show;
      });
  },
};

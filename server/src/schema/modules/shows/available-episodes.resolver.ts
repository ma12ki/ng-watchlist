import * as moment from 'moment';

import episodes from './mock-data/episodes';

export default {
  availableEpisodes() {
    const now = moment();
    return episodes
      .filter((ep) => {
        return moment(ep.premiereDate).isBefore(now);
      });
  },
};

import episodes from './mock-data/episodes';

export default {
  Show: {
    episodes: (show) => {
      if (show.episodes) {
        return show.episodes;
      }
      return episodes.filter((ep) => ep.showId === show._id);
    },
  },
};

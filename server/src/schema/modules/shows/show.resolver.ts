import episodes from './mock-data/episodes';

export default {
  Show: {
    episodes: (show) => {
      return episodes.filter((ep) => ep.showId === show._id);
    },
  },
};

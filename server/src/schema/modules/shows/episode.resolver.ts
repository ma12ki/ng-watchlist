import shows from './mock-data/shows';

export default {
  Episode: {
    show: (episode) => {
      return shows.find((show) => show._id === episode.showId);
    },
  },
};

import shows from './mock-data/shows';

export default {
  Episode: {
    premiereDate: (episode) => {
      return episode.premiereDate.toISOString();
    },
    show: (episode) => {
      return shows.find((show) => show._id === episode.showId);
    },
  },
};

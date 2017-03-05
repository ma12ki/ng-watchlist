import { ShowModel } from './models/show.model';

export default {
  Episode: {
    premiereDate: (episode) => {
      return episode.premiereDate.toISOString();
    },
    show: async (episode) => {
      if (episode.show) {
        return episode.show;
      }
      return ShowModel.findById(episode.showId).lean();
    },
  },
};

import { ShowModel } from './models/show.model';

export default {
  Episode: {
    premiereDate: (episode) => {
      return episode.premiereDate.toISOString();
    },
    show: async (episode) => {
      return ShowModel.findById(episode.showId).lean();
    },
  },
};

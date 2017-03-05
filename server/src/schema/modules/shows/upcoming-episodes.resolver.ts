import * as moment from 'moment';

import { EpisodeModel } from "./models/episode.model";

const upcomingEpisodes = async () => {
  const now = moment().toISOString();

  return EpisodeModel.find({
    premiereDate: { $gt: now },
  }).lean();
};

export default {
  upcomingEpisodes,
};

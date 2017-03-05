import * as moment from 'moment';

import { EpisodeModel } from "./models/episode.model";

const availableEpisodes = async () => {
  const now = moment().toISOString();

  return EpisodeModel.find({
    premiereDate: { $lte: now },
  }).lean();
};

export default {
  availableEpisodes,
};

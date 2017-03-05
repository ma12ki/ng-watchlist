import * as moment from 'moment';

import { EpisodeModel } from "./models/episode.model";

export default {
  availableEpisodes() {
    const now = moment().toISOString();

    return EpisodeModel.find({
      premiereDate: { $lte: now },
    }).lean();
  },
};

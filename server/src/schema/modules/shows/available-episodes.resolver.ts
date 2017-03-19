import * as moment from 'moment';

import { EpisodeModel } from './models/episode.model';
import { UserEpisodeModel } from './models/user-episode.model';

const availableEpisodes = async (_root, _args, {user}) => {
  const now = moment().toISOString();

  const userEpisodes = await UserEpisodeModel.find({
    userId: user._id,
  }).select({
    episodeId: 1,
  }).lean() as Array<any>;

  const userEpisodeIds = userEpisodes.map((ep) => ep.episodeId);

  return EpisodeModel.find({
    _id: { $nin: userEpisodeIds },
    premiereDate: { $lte: now },
  }).sort({
    premiereDate: 1,
  }).lean();
};

export default {
  availableEpisodes,
};

import * as moment from 'moment';

import { UserShowModel } from './models/user-show.model';
import { EpisodeModel } from "./models/episode.model";

const upcomingEpisodes = async (_root, _args, {user}) => {
  const now = moment().startOf('day').toISOString();

  const userShows = await UserShowModel.find({
    userId: user._id,
    tracked: true,
  }).select({
    showId: 1,
  }).lean() as Array<any>;

  const userShowIds = userShows.map((s) => s.showId);

  return EpisodeModel.find({
    showId: { $in: userShowIds },
    premiereDate: { $gt: now },
  }).lean();
};

export default {
  upcomingEpisodes,
};

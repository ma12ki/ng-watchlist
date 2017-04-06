import * as moment from 'moment';

import { UserShowModel } from './models/user-show.model';
import { EpisodeModel } from "./models/episode.model";

const addLtDate = (condition, date) => {
  if (date) {
    return Object.assign({},
      condition,
      { $lt: moment(date).endOf('day').toISOString() },
    );
  }

  return condition;
};

const upcomingEpisodes = async (_root, {maxDate}, {user}) => {
  const now = moment().endOf('day').toISOString();
  const userShows = await UserShowModel.find({
    userId: user._id,
    tracked: true,
  }).select({
    showId: 1,
  }).lean() as Array<any>;
  const userShowIds = userShows.map((s) => s.showId);

  return EpisodeModel.find({
    showId: { $in: userShowIds },
    premiereDate: addLtDate({ $gt: now }, maxDate),
  }).lean();
};

export default {
  upcomingEpisodes,
};

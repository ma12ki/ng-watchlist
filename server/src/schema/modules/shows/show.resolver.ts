import { Types } from 'mongoose';

import episodes from './mock-data/episodes';
import { UserShowModel } from './models/user-show.model';

export default {
  Show: {
    premiereDate: (show) => {
      return show.premiereDate.toISOString();
    },
    listed: async (show, _args, {user}) => {
      if (show.listed == null) {
        const userShow: any = await UserShowModel.findOne({
          userId: Types.ObjectId(user._id),
          showId: show._id,
        }).lean();

        if (userShow) {
          show.listed = true;
          show.tracked = userShow.tracked;
        } else {
          show.listed = false;
          show.tracked = false;
        }
      }
      return show.listed;
    },
    tracked: async (show, _args, {user}) => {
      if (show.listed == null) {
        const userShow: any = await UserShowModel.findOne({
          userId: Types.ObjectId(user._id),
          showId: show._id,
        }).lean();

        if (userShow) {
          show.listed = true;
          show.tracked = userShow.tracked;
        } else {
          show.listed = false;
          show.tracked = false;
        }
      }
      return show.tracked;
    },
    episodes: (show) => {
      if (show.episodes) {
        return show.episodes;
      }
      return episodes.filter((ep) => ep.showId === show._id);
    },
  },
};

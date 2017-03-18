import { EpisodeModel } from './models/episode.model';
import { UserEpisodeModel } from './models/user-episode.model';

async function markEpisodeWatched(_root, {showId}, {user}) {
  return markEpisodeWatchedDb(showId, user);
}

async function markEpisodeWatchedDb(episodeId, user) {
  const episode = await EpisodeModel.findById(episodeId);

  if (!episode) {
    throw new Error(`Episode with ID ${episodeId} does not exist`);
  }

  const userEpisode = await UserEpisodeModel.findOne({
    userId: user._id,
    showId: episode.showId,
    episodeId: episodeId,
  });

  if (userEpisode) {
    throw new Error(`Episode with ID ${episodeId} is already marked as watched for user ${user.name}`);
  }

  return episode.toObject();
}

export default {
  markEpisodeWatched,
};

export {
  markEpisodeWatchedDb,
};

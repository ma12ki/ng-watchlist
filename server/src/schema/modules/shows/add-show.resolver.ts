import { ShowModel } from './models/show.model';
import { EpisodeModel } from './models/episode.model';

export default {
  async addShow(_root, {
    name,
    premiereDate,
    category,
    frequency,
    season,
    episodes,
  }) {
    const show = {
      name,
      premiereDate,
      category,
      frequency,
    };

    const createdShow = await ShowModel.create(show);
    const createdEpisodes = await createEpisodes(
      createdShow._id,
      premiereDate,
      category,
      frequency,
      season,
      episodes,
    );

    return {
      ...createdShow.toObject(),
      episodes: createdEpisodes,
    };
  },
};


async function createEpisodes(
  showId: string,
  premiereDate: string,
  category: string,
  frequency: string,
  season = 0,
  episodes = 0,
) {
  const eps = [{
    showId,
    season,
    episode: episodes,
    premiereDate,
  }];

  const createdEpisodes = await EpisodeModel.insertMany(eps);
  return createdEpisodes;
};

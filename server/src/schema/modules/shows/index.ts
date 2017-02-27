import showTypeResolver from './show.resolver';
import showType from './show.type';

import episodeTypeResolver from './episode.resolver';
import episodeType from './episode.type';

import showsQuery from './shows.query';
import showsQueryResolver from './shows.resolver';

import availableEpisodesQuery from './available-episodes.query';
import availableEpisodesQueryResolver from './available-episodes.resolver';

import upcomingEpisodesQuery from './upcoming-episodes.query';
import upcomingEpisodesQueryResolver from './upcoming-episodes.resolver';

import addShowMutation from './add-show.mutation';
import addShowMutationResolver from './add-show.resolver';

import categoryEnum from './categories.enum';
import frequencyEnum from './frequencies.enum';

const queries = `
  ${showsQuery}
  ${availableEpisodesQuery}
  ${upcomingEpisodesQuery}
`;

const queryResolvers = {
  ...showsQueryResolver,
  ...availableEpisodesQueryResolver,
  ...upcomingEpisodesQueryResolver,
};

const typeDefs = [
  showType,
  episodeType,
  categoryEnum,
  frequencyEnum,
];

const typeResolvers = {
  ...showTypeResolver,
  ...episodeTypeResolver,
};

const mutations = `
  ${addShowMutation}
`;

const mutationResolvers = {
  ...addShowMutationResolver,
};

export {
  typeDefs,
  typeResolvers,
  queries,
  queryResolvers,
  mutations,
  mutationResolvers,
};

import showTypeResolver from './show.resolver';
import showType from './show.type';

import episodeTypeResolver from './episode.resolver';
import episodeType from './episode.type';

import showsQuery from './shows.query';
import showsQueryResolver from './shows.resolver';

import availableShowsQuery from './available-shows.query';
import availableShowsQueryResolver from './available-shows.resolver';

const queries = `
  ${showsQuery}
  ${availableShowsQuery}
`;

const typeDefs = [
  showType,
  episodeType,
];

const typeResolvers = {
  ...showTypeResolver,
  ...episodeTypeResolver,
};

const queryResolvers = {
  ...showsQueryResolver,
  ...availableShowsQueryResolver,
};

export {
  typeDefs,
  typeResolvers,
  queries,
  queryResolvers
};

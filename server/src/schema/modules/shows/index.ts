import showTypeResolver from './show.resolver';
import showType from './show.type';

import showsQuery from './shows.query';
import showsQueryResolver from './shows.resolver';

import episodeTypeResolver from './episode.resolver';
import episodeType from './episode.type';

const queries = `
  ${showsQuery}
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
};

export {
  typeDefs,
  typeResolvers,
  queries,
  queryResolvers
};

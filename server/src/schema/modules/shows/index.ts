import showType from './show.type';
import showResolver from './show.resolver';

import showsQuery from './shows.query';
import showsResolver from './shows.resolver';

import episodeType from './episode.type';
import episodeResolver from './episode.resolver';

const queries = `
  ${showsQuery}
`;

const typeDefs = [
  showType,
  episodeType,
];

const resolvers = {
  ...showsResolver,
  ...showResolver,
  ...episodeResolver,
};

export {
  typeDefs,
  resolvers,
  queries,
};

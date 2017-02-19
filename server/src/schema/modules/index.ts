import {
  queries as showsQueries,
  queryResolvers as showsQueryResolvers,
  typeDefs as showsTypeDefs,
  typeResolvers as showsTypeResolvers,
} from './shows';

const rootQuery = `
  type RootQuery {
    ${showsQueries}
  }
`;

const rootResolver = {
  RootQuery: {
    ...showsQueryResolvers,
  },
  ...showsTypeResolvers,
};

const typeDefs = [
  ...showsTypeDefs,
];

const typeResolvers = {
  ...showsTypeResolvers,
};

export {
  rootQuery,
  rootResolver,
  typeDefs,
};

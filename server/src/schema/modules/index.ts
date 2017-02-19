import {
  queries as showsQueries,
  resolvers as showsResolvers,
  typeDefs as showsTypeDefs,
} from './shows';

const rootQuery = `
  type RootQuery {
    ${showsQueries}
  }
`;

const typeDefs = [
  ...showsTypeDefs
];

const resolvers = {
  RootQuery: {
    ...showsResolvers
  }
};

export {
  rootQuery,
  typeDefs,
  resolvers,
};

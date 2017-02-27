import {
  queries as showsQueries,
  queryResolvers as showsQueryResolvers,
  typeDefs as showsTypeDefs,
  typeResolvers as showsTypeResolvers,
  mutations as showsMutations,
  mutationResolvers as showsMutationResolvers,
} from './shows';

const rootQuery = `
  type RootQuery {
    ${showsQueries}
  }
`;

const rootMutation = `
  type RootMutation {
    ${showsMutations}
  }
`;

const rootResolver = {
  RootMutation: {
    ...showsMutationResolvers,
  },
  RootQuery: {
    ...showsQueryResolvers,
  },
  ...showsTypeResolvers,
};

const typeDefs = [
  ...showsTypeDefs,
];

export {
  rootQuery,
  rootResolver,
  typeDefs,
  rootMutation,
};

import { IModule } from '../shared';
import logIn from './log-in';
import * as shared from './shared';

// queries
const queries = `
`;

const queryResolvers = {
};

// types
const typeDefs = [
  ...shared.typeDefs,
];

const typeResolvers = {
};

// mutations
const mutations = `
  ${logIn.mutation}
`;

const mutationResolvers = {
  ...logIn.resolver,
};

export const usersModule: IModule = {
  queries,
  queryResolvers,
  typeDefs,
  typeResolvers,
  mutations,
  mutationResolvers,
};

import { GraphQLSchema } from 'graphql';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

import {
  rootMutation,
  rootQuery,
  rootResolver,
  typeDefs as modulesTypeDefs,
} from './modules';

const typeDefs = [`
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`,
  ...modulesTypeDefs,
  rootMutation,
  rootQuery,
];

const Schema: GraphQLSchema = makeExecutableSchema({
  logger: console,
  resolverValidationOptions: {
    requireResolversForNonScalar: false,
  },
  resolvers: rootResolver,
  typeDefs,
});
addMockFunctionsToSchema({
  mocks: {},
  preserveResolvers: true,
  schema: Schema,
});

export { Schema };

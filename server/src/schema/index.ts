import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import {
  rootQuery,
  resolvers,
  typeDefs as modulesTypeDefs,
} from './modules';

console.log('aaa');

const typeDefs = [`
  schema {
    query: RootQuery
  }
`,
  ...modulesTypeDefs,
  rootQuery,
];

const Schema: GraphQLSchema = makeExecutableSchema({
  logger: console,
  resolverValidationOptions: {
    requireResolversForNonScalar: false,
  },
  resolvers: resolvers,
  typeDefs: typeDefs,
});
addMockFunctionsToSchema({
  mocks: {},
  preserveResolvers: true,
  schema: Schema,
});

export { Schema };

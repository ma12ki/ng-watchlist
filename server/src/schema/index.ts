import { GraphQLSchema } from 'graphql';
import { addMockFunctionsToSchema, makeExecutableSchema } from 'graphql-tools';

import {
  rootQuery,
  rootResolver,
  typeDefs as modulesTypeDefs,
} from './modules';

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
  resolvers: rootResolver,
  typeDefs,
});
addMockFunctionsToSchema({
  mocks: {},
  preserveResolvers: true,
  schema: Schema,
});

export { Schema };

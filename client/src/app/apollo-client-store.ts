import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { environment } from '../environments/environment';

export const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    // Example endpoint
    uri: environment.graphQlUrl
  }),
  // ID mapping required for automatic updates of objects in the store after
  // mutations.
  dataIdFromObject: o => o['_id'],
  // Enable Apollo Dev Tools Extension
  connectToDevTools: true
});

export function provideClient(): ApolloClient {
  return client;
}

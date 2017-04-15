import { HTTPFetchNetworkInterface } from 'apollo-client/transport/networkInterface';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { MiddlewareInterface, MiddlewareRequest } from 'apollo-client/transport/middleware';

import { environment } from '../environments/environment';
import { AuthService } from './core/auth/auth.service';

export const networkInterface = createNetworkInterface({
  uri: environment.serverUrl,
});

export const bearerTokenMiddleware: MiddlewareInterface = {
  applyMiddleware(this: HTTPFetchNetworkInterface, request: MiddlewareRequest, next: Function) {
    const token = AuthService.token;
    request.options.headers.Authorization = `Bearer ${token}`;
    next();
  }
};

networkInterface.use([
  bearerTokenMiddleware,
]);

export const client = new ApolloClient({
  networkInterface,
  // ID mapping required for automatic updates of objects in the store after
  // mutations.
  dataIdFromObject: o => o['_id'],
  // Enable Apollo Dev Tools Extension
  connectToDevTools: !environment.production,
});

export function provideClient(): ApolloClient {
  return client;
}

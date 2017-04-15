import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { MutationOptions, WatchQueryOptions } from 'apollo-client/core/watchQueryOptions';

import { ErrorHandlerService } from './error-handler.service';

@Injectable()
export class DecoratedApolloService {

  constructor(
    private apollo: Apollo,
    private errorHandler: ErrorHandlerService,
  ) { }

  watchQuery<T>(options: WatchQueryOptions) {
    return this.apollo.watchQuery<T>(options)
      .catch(this.errorHandler.handleApolloError);
  }

  mutate<T>(options: MutationOptions) {
    return this.apollo.mutate<T>(options)
      .catch(this.errorHandler.handleApolloError);
  }

}

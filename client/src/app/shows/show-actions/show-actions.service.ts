import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ShowActionsService {

  constructor(
    private apollo: Apollo
  ) { }

  addShow(showId) {
    const mutation = gql`
      mutation AddShowToListMutation(
        $showId: String!,
      ) {
        addShowToList(
          showId: $showId,
        ) {
          _id
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation,
      variables: {
        showId,
      }
    }).map(({data}) => {
      const show = data.addShowToList;
      return show;
    });
  }

  removeShow(showId) {
    const mutation = gql`
      mutation RemoveShowFromListMutation(
        $showId: String!,
      ) {
        removeShowFromList(
          showId: $showId,
        ) {
          _id
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation,
      variables: {
        showId,
      }
    }).map(({data}) => {
      const show = data.removeShowToList;
      return show;
    });
  }

  trackShow(showId) {
    return Observable.of({})
      .delay(1000);
  }

  untrackShow(showId) {
    return Observable.of({})
      .delay(1000);
  }

  markWatchedEpisode(episodeId) {
    return Observable.of({})
      .delay(1000);
  }

  unmarkWatchedEpisode(episodeId) {
    return Observable.of({})
      .delay(1000);
  }

}

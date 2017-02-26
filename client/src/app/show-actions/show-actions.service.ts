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

  // loadUpcomingEpisodes() {
  //   const query = gql`
  //     query UpcomingEpisodesQuery {
  //       upcomingEpisodes {
  //         _id
  //         season
  //         episode
  //         premiereDate
  //         show {
  //           name
  //         }
  //       }
  //     }
  //   `;

  //   return this.apollo.watchQuery<any>({
  //     query: query
  //   }).map(({data}) => data.upcomingEpisodes);
  // }

  addShow(showId) {
    return Observable.of({})
      .delay(1000);
  }

  removeShow(showId) {
    return Observable.of({})
      .delay(1000);
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

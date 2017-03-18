import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class UpcomingEpisodesService {

  constructor(
    private apollo: Apollo
  ) { }

  loadUpcomingEpisodes() {
    const query = gql`
      query UpcomingEpisodesQuery {
        upcomingEpisodes {
          _id
          season
          episode
          premiereDate
          show {
            name
            category
          }
        }
      }
    `;

    return this.apollo.watchQuery<any>({
      query: query
    }).map(({data}) => data.upcomingEpisodes);
  }

}

import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class AvailableEpisodesService {

  constructor(
    private apollo: Apollo
  ) { }

  loadAvailableEpisodes() {
    const query = gql`
      query AvailableEpisodesQuery {
        availableEpisodes {
          _id
          season
          episode
          premiereDate
          watched
          show {
            _id
            name
            category
          }
        }
      }
    `;

    return this.apollo.watchQuery<any>({
      forceFetch: true,
      query: query,
    }).map(({data}) => data.availableEpisodes);
  }

}

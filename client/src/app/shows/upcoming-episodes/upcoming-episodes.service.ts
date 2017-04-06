import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class UpcomingEpisodesService {

  constructor(
    private apollo: Apollo
  ) { }

  loadUpcomingEpisodes({maxDate = '', cursor = ''}) {
    const query = gql`
      query UpcomingEpisodesQuery(
        $maxDate: String
      ) {
        upcomingEpisodes(
          maxDate: $maxDate
        ) {
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
      fetchPolicy: 'network-only',
      query: query,
      variables: {
        maxDate,
      },
    }).map(({data}) => data.upcomingEpisodes);
  }

}

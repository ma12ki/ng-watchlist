import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const query = gql`
  query UpcomingEpisodesQuery(
    $maxDate: String,
    $cursor: String
  ) {
    upcomingEpisodes(
      maxDate: $maxDate,
      cursor: $cursor
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

@Injectable()
export class UpcomingEpisodesService {
  constructor(
    private apollo: Apollo
  ) { }

  loadUpcomingEpisodes({maxDate = ''}) {
    return this.apollo.watchQuery({
      fetchPolicy: 'network-only',
      query: query,
      variables: {
        maxDate
      },
    }).map(({data}) => data.upcomingEpisodes);
  }

  loadMoreUpcomingEpisodes({cursor = ''}) {
    return this.apollo.watchQuery({
      fetchPolicy: 'network-only',
      query: query,
      variables: {
        cursor,
      },
    }).map(({data}) => data.upcomingEpisodes);
  }

}

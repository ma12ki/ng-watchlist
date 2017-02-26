import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable()
export class AllShowsService {

  constructor(
    private apollo: Apollo
  ) { }

  loadAllShows() {
    const query = gql`
      query AllShowsQuery {
        shows {
          _id
          name
          category
          listed
          tracked
        }
      }
    `;

    return this.apollo.watchQuery<any>({
      query: query
    }).map(({data}) => data.shows);
  }

}

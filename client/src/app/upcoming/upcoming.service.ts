import { Observable } from 'rxjs/Rx';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

const upcomingPlaceholder = {
  data: {
    upcoming: [
      {
        _id: 1,
        title: 'Rick and Morty',
        season: 3,
        episode: 1,
        premiereDate: moment().add(3, 'days').toDate()
      },
      {
        _id: 2,
        title: 'Rick and Morty',
        season: 3,
        episode: 2,
        premiereDate: moment().add(5, 'days').toDate()
      },
      {
        _id: 3,
        title: 'Rick and Morty',
        season: 3,
        episode: 3,
        premiereDate: moment().add(6, 'days').toDate()
      }
    ]
  }
};

@Injectable()
export class UpcomingService {

  constructor(
    private apollo: Apollo
  ) { }

  loadUpcoming() {
    // const query = gql`
    //   query UpcomingQuery {
    //     upcoming {
    //       name
    //       country
    //     }
    //   }
    // `;

    // return this.apollo.watchQuery<any>({
    //   query: query
    // }).map(({data}) => data.upcoming);
    return Observable.of(upcomingPlaceholder)
      .delay(1000)
      .map(({data}) => data.upcoming);
  }
}

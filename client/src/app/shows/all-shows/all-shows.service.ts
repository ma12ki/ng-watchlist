import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import * as moment from 'moment';

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

  saveShow({
    name,
    category,
    premiereDate,
    season,
    episodes,
    frequency,
  }) {
    const mutation = gql`
      mutation AddShowMutation(
        $name: String!,
        $category: CATEGORY!,
        $premiereDate: String!,
        $season: Int,
        $episodes: Int,
        $frequency: FREQUENCY
      ) {
        addShow(
          name: $name,
          category: $category,
          premiereDate: $premiereDate,
          season: $season,
          episodes: $episodes,
          frequency: $frequency
        ) {
          _id
          name
          category
          frequency
          premiereDate
          listed
          tracked
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation,
      variables: {
        name,
        category,
        premiereDate,
        season,
        episodes,
        frequency,
      }
    }).map(({data}) => {
      const show = data.addShow;
      show.premiereDate = moment(show.premiereDate).toDate();

      if (show.episodes) {
        show.episodes = show.episodes.map((episode) => {
          episode.premiereDate = moment(episode.premiereDate).toDate();
          return episode;
        });
      }

      return show;
    });
  }

}

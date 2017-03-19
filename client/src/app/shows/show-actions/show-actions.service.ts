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
    const mutation = gql`
      mutation TrackShow(
        $showId: String!,
      ) {
        trackShow(
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
      const show = data.trackShow;
      return show;
    });
  }

  untrackShow(showId) {
    const mutation = gql`
      mutation UntrackShow(
        $showId: String!,
      ) {
        untrackShow(
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
      const show = data.untrackShow;
      return show;
    });
  }

  markWatchedEpisode(episodeId) {
    const mutation = gql`
      mutation MarkEpisodeWatched(
        $episodeId: String!,
      ) {
        markEpisodeWatched(
          episodeId: $episodeId,
        ) {
          _id
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation,
      variables: {
        episodeId,
      }
    }).map(({data}) => {
      const episode = data.markEpisodeWatched;
      return episode;
    });
  }

  unmarkWatchedEpisode(episodeId) {
    const mutation = gql`
      mutation UnmarkEpisodeWatched(
        $episodeId: String!,
      ) {
        unmarkEpisodeWatched(
          episodeId: $episodeId,
        ) {
          _id
        }
      }
    `;

    return this.apollo.mutate<any>({
      mutation,
      variables: {
        episodeId,
      }
    }).map(({data}) => {
      const episode = data.unmarkEpisodeWatched;
      return episode;
    });
  }

}

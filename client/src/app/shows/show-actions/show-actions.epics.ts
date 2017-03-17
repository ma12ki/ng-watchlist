import { Injectable } from '@angular/core';
import { Epic } from 'redux-observable';
import { Action } from 'redux';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { ShowActionsService } from './show-actions.service';
import { ShowActions } from './show-actions.actions';

@Injectable()
export class ShowActionsEpics {
  epics: Epic<Action>[];

  constructor(
    private service: ShowActionsService,
    private actions: ShowActions,
  ) {
    this.epics = [
      this.addShow,
      this.removeShow,
      this.trackShow,
      this.untrackShow,
      this.markWatchedEpisode,
      this.unmarkWatchedEpisode,
    ];
  }

  addShow = action$ => action$
    .ofType(ShowActions.ADD_START)
    .mergeMap(action => this.service.addShow(action.payload.showId)
      .map(data => this.actions.addSucceeded({
        showId: action.payload.showId
      }))
      .catch(err => of(this.actions.addFailed({
          showId: action.payload.showId
        },
        err)
      )));

  removeShow = action$ => action$
    .ofType(ShowActions.REMOVE_START)
    .mergeMap(action => this.service.removeShow(action.payload.showId)
      .map(data => this.actions.removeSucceeded({
        showId: action.payload.showId
      }))
      .catch(err => of(this.actions.removeFailed({
          showId: action.payload.showId
        },
        err)
      )));

  trackShow = action$ => action$
    .ofType(ShowActions.TRACK_START)
    .mergeMap(action => this.service.trackShow(action.payload.showId)
      .map(data => this.actions.trackSucceeded({
        showId: action.payload.showId
      }))
      .catch(err => of(this.actions.trackFailed({
          showId: action.payload.showId
        },
        err)
      )));

  untrackShow = action$ => action$
    .ofType(ShowActions.UNTRACK_START)
    .mergeMap(action => this.service.untrackShow(action.payload.showId)
      .map(data => this.actions.untrackSucceeded({
        showId: action.payload.showId
      }))
      .catch(err => of(this.actions.untrackFailed({
          showId: action.payload.showId
        },
        err)
      )));

  markWatchedEpisode = action$ => action$
    .ofType(ShowActions.MARK_WATCHED_START)
    .mergeMap(action => this.service.markWatchedEpisode(action.payload.episodeId)
      .map(data => this.actions.markWatchedSucceeded({
        showId: action.payload.showId,
        episodeId: action.payload.episodeId,
      }))
      .catch(err => of(this.actions.markWatchedFailed({
          showId: action.payload.showId,
          episodeId: action.payload.episodeId,
        },
        err)
      )));

  unmarkWatchedEpisode = action$ => action$
    .ofType(ShowActions.UNMARK_WATCHED_START)
    .mergeMap(action => this.service.unmarkWatchedEpisode(action.payload.episodeId)
      .map(data => this.actions.unmarkWatchedSucceeded({
        showId: action.payload.showId,
        episodeId: action.payload.episodeId,
      }))
      .catch(err => of(this.actions.unmarkWatchedFailed({
          showId: action.payload.showId,
          episodeId: action.payload.episodeId,
        },
        err)
      )));
}

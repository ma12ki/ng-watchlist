import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { Observable } from 'rxjs/Rx';

import { IShowAction, ShowActions } from '../show-actions.actions';
import selectors from '../show-actions.selectors';

@Component({
  selector: 'wl-watched-toggle',
  templateUrl: './watched-toggle.component.html',
  styleUrls: ['./watched-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchedToggleComponent implements OnInit {
  @Input() showId: string;
  @Input() episodeId: string;
  @Input() watched: boolean;
  isFetching$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: ShowActions,
  ) { }

  ngOnInit() {
    this.isFetching$ = this.ngRedux.select((state) => selectors.episodeIsFetching(state, this.showId, this.episodeId));
    this.error$ = this.ngRedux.select((state) => selectors.episodeError(state, this.showId, this.episodeId));
  }

  watchedToggle() {
    const payload: IShowAction = {
      showId: this.showId,
      episodeId: this.episodeId,
    };
    const action = this.watched ? this.actions.unmarkWatchedStart : this.actions.markWatchedStart;

    this.ngRedux.dispatch(action(payload));
  }

}

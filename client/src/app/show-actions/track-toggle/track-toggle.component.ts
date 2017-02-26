import { Component, Input, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { Observable } from 'rxjs/Rx';

import { IShowAction, ShowActions } from '../show-actions.actions';
import selectors from '../show-actions.selectors';

@Component({
  selector: 'wl-track-toggle',
  templateUrl: './track-toggle.component.html',
  styleUrls: ['./track-toggle.component.scss']
})
export class TrackToggleComponent implements OnInit {
  @Input() showId: string;
  @Input() tracked: boolean;
  isFetching$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: ShowActions,
  ) { }

  ngOnInit() {
    this.isFetching$ = this.ngRedux.select((state) => selectors.showIsFetching(state, this.showId));
    this.error$ = this.ngRedux.select((state) => selectors.showError(state, this.showId));
  }

  trackToggle() {
    const payload: IShowAction = {
      showId: this.showId
    };
    const action = this.tracked ? this.actions.untrackStart : this.actions.trackStart;

    this.ngRedux.dispatch(action(payload));
  }

}

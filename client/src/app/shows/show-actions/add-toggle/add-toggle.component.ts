import { Component, Input, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { Observable } from 'rxjs/Rx';

import { IShowAction, ShowActions } from '../show-actions.actions';
import selectors from '../show-actions.selectors';

@Component({
  selector: 'wl-add-toggle',
  templateUrl: './add-toggle.component.html',
  styleUrls: ['./add-toggle.component.scss']
})
export class AddToggleComponent implements OnInit {
  @Input() showId: string;
  @Input() listed: boolean;
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

  addToggle() {
    const payload: IShowAction = {
      showId: this.showId
    };
    const action = this.listed ? this.actions.removeStart : this.actions.addStart;

    this.ngRedux.dispatch(action(payload));
  }

}

import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';

import { AllShowsActions } from '../all-shows.actions';
import { AllShowsService } from '../all-shows.service';
import * as allShowsSelectors from '../all-shows.selectors';

@Component({
  selector: 'wl-all-shows-list',
  templateUrl: './all-shows-list.component.html',
  styleUrls: ['./all-shows-list.component.scss']
})
export class AllShowsListComponent implements OnInit {
  @select(allShowsSelectors.items) items$;
  @select(allShowsSelectors.error) error$;
  @select(allShowsSelectors.isFetching) isFetching$;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AllShowsActions
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadStart());
  }

  getItemId(_index, item) {
    return item._id;
  }

}

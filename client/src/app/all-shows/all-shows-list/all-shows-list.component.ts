import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';

import { AllShowsActions } from '../all-shows.actions';
import { AllShowsService } from '../all-shows.service';

@Component({
  selector: 'wl-all-shows-list',
  templateUrl: './all-shows-list.component.html',
  styleUrls: ['./all-shows-list.component.scss']
})
export class AllShowsListComponent implements OnInit {
  @select(['allShows', 'items']) items$;
  @select(['allShows', 'error']) error$;
  @select(['allShows', 'isFetching']) isFetching$;

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

  getItemId(index, item) {
    return item._id;
  }

}

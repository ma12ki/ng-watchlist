import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';
import { Observable } from 'rxjs/Rx';

import { AllShowsActions } from '../all-shows.actions';
import { AllShowsService } from '../all-shows.service';
import * as allShowsSelectors from '../all-shows.selectors';

@Component({
  selector: 'wl-all-shows-list',
  templateUrl: './all-shows-list.component.html',
  styleUrls: ['./all-shows-list.component.scss']
})
export class AllShowsListComponent implements OnInit {
  @select(allShowsSelectors.items) items$: Observable<any[]>;
  @select(allShowsSelectors.error) error$;
  @select(allShowsSelectors.isFetching) isFetching$;

  sortedItems$: Observable<any[]>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AllShowsActions
  ) { }

  ngOnInit() {
    this.reload();

    this.sortedItems$ = this.items$.map((items: any) => {
      return items.asMutable().sort((a, b) => {
        return a.name.toLowerCase() > b.name.toLowerCase();
      });
    });
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadStart());
  }

  getItemId(_index, item) {
    return item._id;
  }

}

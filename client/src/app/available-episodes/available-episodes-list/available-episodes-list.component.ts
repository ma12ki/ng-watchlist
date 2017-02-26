import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';

import { AvailableEpisodesActions } from '../available-episodes.actions';
import { AvailableEpisodesService } from '../available-episodes.service';
import selectors from '../available-episodes.selectors';

@Component({
  selector: 'wl-available-episodes-list',
  templateUrl: './available-episodes-list.component.html',
  styleUrls: ['./available-episodes-list.component.scss']
})
export class AvailableEpisodesListComponent implements OnInit {
  @select((state) => selectors.items(state)) items$;
  @select((state) => selectors.error(state)) error$;
  @select((state) => selectors.isFetching(state)) isFetching$;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AvailableEpisodesActions,
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

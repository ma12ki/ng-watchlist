import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';

import { AvailableEpisodesActions } from '../available-episodes.actions';
import { AvailableEpisodesService } from '../available-episodes.service';

@Component({
  selector: 'wl-available-episodes-list',
  templateUrl: './available-episodes-list.component.html',
  styleUrls: ['./available-episodes-list.component.scss']
})
export class AvailableEpisodesListComponent implements OnInit {
  @select(['availableEpisodes', 'items']) items$;
  @select(['availableEpisodes', 'error']) error$;
  @select(['availableEpisodes', 'isFetching']) isFetching$;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AvailableEpisodesActions
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

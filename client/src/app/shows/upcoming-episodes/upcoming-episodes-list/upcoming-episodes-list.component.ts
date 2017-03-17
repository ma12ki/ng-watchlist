import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';

import { UpcomingEpisodesActions } from '../upcoming-episodes.actions';
import { UpcomingEpisodesService } from '../upcoming-episodes.service';

@Component({
  selector: 'wl-upcoming-episodes-list',
  templateUrl: './upcoming-episodes-list.component.html',
  styleUrls: ['./upcoming-episodes-list.component.scss']
})
export class UpcomingEpisodesListComponent implements OnInit {
  @select(['upcomingEpisodes', 'items']) items$;
  @select(['upcomingEpisodes', 'error']) error$;
  @select(['upcomingEpisodes', 'isFetching']) isFetching$;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: UpcomingEpisodesActions
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

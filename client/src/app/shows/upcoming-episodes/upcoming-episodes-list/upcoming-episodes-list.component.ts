import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';
import { Observable } from 'rxjs/Rx';
import 'rxjs';
import * as moment from 'moment';

import { UpcomingEpisodesActions } from '../upcoming-episodes.actions';
import * as upcomingEpisodesSelectors from '../upcoming-episodes.selectors';

@Component({
  selector: 'wl-upcoming-episodes-list',
  templateUrl: './upcoming-episodes-list.component.html',
  styleUrls: ['./upcoming-episodes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingEpisodesListComponent implements OnInit {
  @select(upcomingEpisodesSelectors.items) items$: Observable<any[]>;
  @select(upcomingEpisodesSelectors.error) error$;
  @select(upcomingEpisodesSelectors.isFetching) isFetching$;
  groupedItems$: Observable<any[]>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: UpcomingEpisodesActions
  ) { }

  ngOnInit() {
    this.reload();
    const idFormat = 'YYYY-MM-DD';
    this.groupedItems$ = this.items$.map((items: any) => {
      return items.asMutable({deep: true}).reduce((groups, item) => {
        const currentGroup = moment(item.premiereDate).format(idFormat);
        const date = moment(currentGroup, idFormat);
        const group = groups.find((g) => g.id === currentGroup) || { id: currentGroup, date, items: [] };
        group.items.push(item);
        return groups.filter((g) => g.id !== currentGroup).concat(group);
      }, []);
    }).map((groups) => {
      return groups.map((group) => {
        group.items = group.items.sort((a, b) => {
          return a.show.name.toLowerCase() > b.show.name.toLowerCase();
        });
        return group;
      }).sort((a, b) => {
        return a.date - b.date;
      });
    });
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadStart({}));
  }

  getItemId(_index, item) {
    return item._id;
  }
}

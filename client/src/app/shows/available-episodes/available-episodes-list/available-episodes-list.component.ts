import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { select } from '@angular-redux/store/lib/decorators/select';
import { Observable } from 'rxjs/Rx';
import 'rxjs';
import * as moment from 'moment';

import { AvailableEpisodesActions } from '../available-episodes.actions';
import * as selectors from '../available-episodes.selectors';

@Component({
  selector: 'wl-available-episodes-list',
  templateUrl: './available-episodes-list.component.html',
  styleUrls: ['./available-episodes-list.component.scss']
})
export class AvailableEpisodesListComponent implements OnInit {
  @select(selectors.items) items$: Observable<any[]>;
  @select(selectors.error) error$;
  @select(selectors.isFetching) isFetching$;
  groupedItems$: Observable<any[]>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: AvailableEpisodesActions,
  ) { }

  ngOnInit() {
    this.reload();
    this.groupedItems$ = this.items$.map((items: any) => {
      return items.asMutable({deep: true}).reduce((groups, item) => {
        const currentGroup = moment(item.premiereDate).format('YYYY-MM-DD');
        const date = moment(currentGroup, 'YYYY-MM-DD');
        const group = groups.find((g) => g.id === currentGroup) || { id: currentGroup, date, items: [] };
        group.items.push(item);
        return groups.filter((g) => g.id !== currentGroup).concat(group);
      }, []);
    }).map((groups) => {
      return groups.map((group) => {
        group.items = group.items.sort((a, b) => {
          return a.toLowerCase() > b.toLowerCase();
        });
        return group;
      }).sort((a, b) => {
        return a.date - b.date;
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

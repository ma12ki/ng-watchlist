import { animate, Component, OnInit, state, style, transition, trigger } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';

import { UpcomingActions } from '../upcoming.actions';

@Component({
  selector: 'st-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({opacity: 1, transform: 'translateX(0)'})),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('0.2s ease-in')
      ]),
      transition('* => void', [
        animate('0.2s 10 ease-out', style({
          opacity: 0,
          transform: 'translateX(100%)'
        }))
      ])
    ])
  ]
})
export class ShowListComponent implements OnInit {
  @select(['upcoming', 'items'])
  items$;

  @select(['upcoming', 'error'])
  error$;

  @select(['upcoming', 'isFetching'])
  isFetching$;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: UpcomingActions
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

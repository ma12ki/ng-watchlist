import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { select } from '@angular-redux/store';

import * as allShowsSelectors from '../all-shows.selectors';

@Component({
  selector: 'wl-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllShowsComponent {
  @select(allShowsSelectors.error) error$;
  @select(allShowsSelectors.isFetching) isFetching$;

  constructor(
    private router: Router,
  ) { }

  navigateToNew() {
    this.router.navigateByUrl('shows/new');
  }

}

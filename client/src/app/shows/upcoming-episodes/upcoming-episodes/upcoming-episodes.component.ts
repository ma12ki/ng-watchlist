import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select } from '@angular-redux/store';

import * as upcomingEpisodesSelectors from '../upcoming-episodes.selectors';

@Component({
  selector: 'wl-upcoming-episodes',
  templateUrl: './upcoming-episodes.component.html',
  styleUrls: ['./upcoming-episodes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UpcomingEpisodesComponent {
  @select(upcomingEpisodesSelectors.error) error$;
  @select(upcomingEpisodesSelectors.isFetching) isFetching$;
}

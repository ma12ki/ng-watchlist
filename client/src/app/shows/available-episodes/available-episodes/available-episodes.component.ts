import { Component, ChangeDetectionStrategy } from '@angular/core';
import { select } from '@angular-redux/store';

import * as availableEpisodesSelectors from '../available-episodes.selectors';

@Component({
  selector: 'wl-available-episodes',
  templateUrl: './available-episodes.component.html',
  styleUrls: ['./available-episodes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvailableEpisodesComponent {
  @select(availableEpisodesSelectors.error) error$;
  @select(availableEpisodesSelectors.isFetching) isFetching$;
}

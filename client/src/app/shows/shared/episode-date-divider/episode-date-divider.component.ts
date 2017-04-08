import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wl-episode-date-divider',
  templateUrl: './episode-date-divider.component.html',
  styleUrls: ['./episode-date-divider.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EpisodeDateDividerComponent {
  @Input() date: Date;
}

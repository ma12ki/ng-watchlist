import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'wl-loading-error-info',
  templateUrl: './loading-error-info.component.html',
  styleUrls: ['./loading-error-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingErrorInfoComponent implements OnChanges {
  @Input() loading: boolean;
  @Input() error: any;
  errorStr: string;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.error && changes.error.currentValue) {
      console.error(this.error);
      this.errorStr = JSON.stringify(this.error);
    }
  }
}

import { Directive, OnChanges, ElementRef, Input, SimpleChanges } from '@angular/core';
import * as moment from 'moment';

@Directive({
  selector: '[wlEpisodeDateHeatmap]',
})
export class EpisodeDateHeatmapDirective implements OnChanges {
  // tslint:disable-next-line:no-input-rename
  @Input('wlEpisodeDateHeatmap') date: moment.Moment;

  constructor(private elem: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.date && changes.date.currentValue) {
      this.updateHeatmapColor();
    }
  }

  updateHeatmapColor() {
    const now = moment().endOf('day');
    const diff = this.date.diff(now, 'days');

    if (diff > 0) {
      this.elem.nativeElement.style.color = this.heatMapColor(diff);
    }
  }

  // 0    : blue   (hsl(240, 100%, 50%))
  // 0.25 : cyan   (hsl(180, 100%, 50%))
  // 0.5  : green  (hsl(120, 100%, 50%))
  // 0.75 : yellow (hsl(60, 100%, 50%))
  // 1    : red    (hsl(0, 100%, 50%))
  private heatMapColor(diffDays: number): string {
    const coefficient = this.normalizeValue(0, 30, diffDays);
    const hue = coefficient * 240;
    return `hsl(${hue}, 80%, 60%)`;
  }

  // returns a value between 0 and 1
  private normalizeValue(min: number, max: number, value: number): number {
    const diff = max - min;
    if (value < min) {
      value = min;
    }
    if (value > max) {
      value = max;
    }
    return value / diff;
  }
}

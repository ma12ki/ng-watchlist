import { Injectable } from '@angular/core';
import * as moment from 'moment';

export interface IPreview {
  premiereDate: Date;
  season: number;
  episode: number;
}

@Injectable()
export class EpisodesPreviewService {

  constructor() { }

  generatePreviewItems(startDate: Date, frequency: string, season: number, episodes: number): IPreview[] {
    const previewItems: IPreview[] = [];

    for (let i = 0; i < episodes; i++) {
      previewItems.push({
        premiereDate: this.getPremiereDate(startDate, frequency, i),
        season,
        episode: i + 1
      });
    }

    return previewItems;
  }

  getPremiereDate(startDate: Date, frequency: string, recurrenceIndex: number): Date {
    const { amount, unit } = this.frequencyToAmountAndUnit(frequency);
    return moment(startDate).add(amount * recurrenceIndex, unit).toDate();
  }

  frequencyToAmountAndUnit(frequency: string): { amount: number, unit: moment.unitOfTime.DurationConstructor } {
    switch (frequency) {
      case 'WEEKLY':
        return { amount: 1, unit: 'week' };
      case 'MONTHLY':
        return { amount: 1, unit: 'month' };
      default:
        return { amount: 0, unit: 'days' };
    }
  }
}

import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { frequencies } from '../../../common/dictionary';

export interface IPreview {
  premiereDate: Date;
  season: number;
  episode: number;
}

@Injectable()
export class EpisodesPreviewService {
  frequencies = frequencies;

  constructor() { }

  generatePreviewItems(startDate: Date, frequency: string, season: number, episodes: number): IPreview[] {
    const previewItems: IPreview[] = [];
    const { amount, unit } = this.frequencyToAmountAndUnit(frequency);

    for (let i = 0; i < episodes; i++) {
      previewItems.push({
        premiereDate: moment(startDate).add(amount * i, unit).toDate(),
        season,
        episode: i + 1
      });
    }

    return previewItems;
  }

  frequencyToAmountAndUnit(frequency: string): { amount: number, unit: any } {
    return this.frequencies.find((f) => f._id === frequency).amountAndUnit;
  }
}

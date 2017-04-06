import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { DictionaryService } from '../dictionary/dictionary.service';

@Component({
  selector: 'wl-episode-list-item',
  templateUrl: './episode-list-item.component.html',
  styleUrls: ['./episode-list-item.component.scss']
})
export class EpisodeListItemComponent implements OnChanges {
  @Input() name: string;
  @Input() season: number;
  @Input() episode: number;
  @Input() category: string;
  recurring: boolean;
  seasonVerbiage: string;
  episodeVerbiage: string;

  constructor(
    private dictionaryService: DictionaryService,
  ) { }

  ngOnChanges(_changes: SimpleChanges): void {
    this.recurring = this.dictionaryService.isRecurring(this.category);
    const verbiage = this.dictionaryService.getVerbiage(this.category);
    this.seasonVerbiage = verbiage.season;
    this.episodeVerbiage = verbiage.episode;
  }

}

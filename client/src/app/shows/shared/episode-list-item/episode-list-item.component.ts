import { Component, Input, OnInit } from '@angular/core';

import { DictionaryService } from '../dictionary/dictionary.service';

@Component({
  selector: 'wl-episode-list-item',
  templateUrl: './episode-list-item.component.html',
  styleUrls: ['./episode-list-item.component.scss']
})
export class EpisodeListItemComponent implements OnInit {
  @Input() name: string;
  @Input() season: number;
  @Input() episode: number;
  @Input() category: string;

  constructor(
    private dictionaryService: DictionaryService,
  ) { }

  ngOnInit() {
  }

  isRecurring(categoryId: string): boolean {
    return this.dictionaryService.isRecurring(categoryId);
  }

}

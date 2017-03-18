import { Component, Input, OnInit } from '@angular/core';

import { DictionaryService } from '../dictionary/dictionary.service';

@Component({
  selector: 'wl-show-avatar',
  templateUrl: './show-avatar.component.html',
  styleUrls: ['./show-avatar.component.scss']
})
export class ShowAvatarComponent implements OnInit {
  @Input() category: string;

  constructor(
    private dictionaryService: DictionaryService,
  ) { }

  ngOnInit() {
  }

  getIcon(categoryId: string): string {
    return this.dictionaryService.getCategory(categoryId).icon;
  }

}

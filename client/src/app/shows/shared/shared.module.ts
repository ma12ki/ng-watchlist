import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { DictionaryService } from './dictionary/dictionary.service';
import { ShowDictionaryReducer } from './dictionary/dictionary.reducer';

import { EpisodeListItemComponent } from './episode-list-item/episode-list-item.component';
import { ShowAvatarComponent } from './show-avatar/show-avatar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  providers: [
    DictionaryService,
    ShowDictionaryReducer,
  ],
  declarations: [
    EpisodeListItemComponent,
    ShowAvatarComponent,
  ],
  exports: [
    EpisodeListItemComponent,
    ShowAvatarComponent,
  ],
})
export class ShowsSharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../../shared/shared.module';

import { DictionaryService } from './dictionary/dictionary.service';
import { ShowDictionaryReducer } from './dictionary/dictionary.reducer';

import { EpisodeListItemComponent } from './episode-list-item/episode-list-item.component';
import { ShowAvatarComponent } from './show-avatar/show-avatar.component';
import { ShowListItemComponent } from './show-list-item/show-list-item.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  providers: [
    DictionaryService,
    ShowDictionaryReducer,
  ],
  declarations: [
    EpisodeListItemComponent,
    ShowAvatarComponent,
    ShowListItemComponent,
  ],
  exports: [
    SharedModule,
    EpisodeListItemComponent,
    ShowAvatarComponent,
    ShowListItemComponent,
  ],
})
export class ShowsSharedModule { }

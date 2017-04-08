import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { SharedModule } from '../../shared/shared.module';

import { DictionaryService } from './dictionary/dictionary.service';
import { ShowDictionaryReducer } from './dictionary/dictionary.reducer';

import { EpisodeListItemComponent } from './episode-list-item/episode-list-item.component';
import { ShowAvatarComponent } from './show-avatar/show-avatar.component';
import { ShowListItemComponent } from './show-list-item/show-list-item.component';
import { EpisodeDateDividerComponent } from './episode-date-divider/episode-date-divider.component';
import { EpisodeDateHeatmapDirective } from './episode-date-divider/episode-date-heatmap.directive';

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
    EpisodeDateDividerComponent,
    EpisodeDateHeatmapDirective,
  ],
  exports: [
    SharedModule,
    EpisodeListItemComponent,
    ShowAvatarComponent,
    ShowListItemComponent,
    EpisodeDateDividerComponent,
    EpisodeDateHeatmapDirective,
  ],
})
export class ShowsSharedModule { }

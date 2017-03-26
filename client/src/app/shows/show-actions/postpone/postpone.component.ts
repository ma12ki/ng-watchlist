import { Component, Input, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { IShowAction, ShowActions } from '../show-actions.actions';
import selectors from '../show-actions.selectors';
import { PostponeModalComponent } from '../postpone-modal/postpone-modal.component';

@Component({
  selector: 'wl-postpone',
  templateUrl: './postpone.component.html',
  styleUrls: ['./postpone.component.scss']
})
export class PostponeComponent implements OnInit {
  @Input() showId: string;
  @Input() episodeId: string;
  isFetching$: Observable<boolean>;
  error$: Observable<any>;

  constructor(
    private ngRedux: NgRedux<any>,
    private actions: ShowActions,
    private dialog: MdDialog,
  ) { }

  ngOnInit() {
    this.isFetching$ = this.ngRedux.select((state) => selectors.episodeIsFetching(state, this.showId, this.episodeId));
    this.error$ = this.ngRedux.select((state) => selectors.episodeError(state, this.showId, this.episodeId));
  }

  postpone() {
    const dialogRef = this.dialog.open(PostponeModalComponent);
    dialogRef.afterClosed()
      .filter((result: any) => result)
      .do((result) => this.ngRedux.dispatch(this.actions.postponeEpisodesStart({
        showId: this.showId,
        episodeId: this.episodeId,
        postponeUntil: result.postponeUntil,
      })))
      .subscribe();
  }
}

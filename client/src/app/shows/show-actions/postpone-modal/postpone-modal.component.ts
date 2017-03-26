import { Component } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  selector: 'wl-postpone-modal',
  templateUrl: './postpone-modal.component.html',
  styleUrls: ['./postpone-modal.component.scss']
})
export class PostponeModalComponent {
  postponeUntil: Date = null;

  constructor(
    private dialogRef: MdDialogRef<PostponeModalComponent>,
  ) { }

  public confirm() {
    this.dialogRef.close({
      postponeUntil: this.postponeUntil,
    });
  }

  public cancel() {
    this.dialogRef.close(false);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NewShowComponent } from './new-show/new-show.component';
import { NewShowContainerComponent } from './new-show-container/new-show-container.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  declarations: [
    NewShowComponent,
    NewShowContainerComponent,
  ],
  exports: [
    NewShowContainerComponent,
  ]
})
export class NewShowModule { }

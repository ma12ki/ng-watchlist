import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewShowComponent } from './new-show/new-show.component';
import { NewShowContainerComponent } from './new-show-container/new-show-container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NewShowComponent, NewShowContainerComponent]
})
export class NewShowModule { }

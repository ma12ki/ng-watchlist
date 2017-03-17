import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
  ],
  declarations: [
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
})
export class CoreModule { }

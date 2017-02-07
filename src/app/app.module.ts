import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule } from '@angular-redux/store';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ApolloModule } from 'apollo-angular';

import { AppComponent } from './app.component';
import { AppActions } from './app.actions';
import { ReduxRoots } from './app.redux-roots';

import { UpcomingModule } from './upcoming/upcoming.module';

import { provideClient } from './apollo-client-store';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule,
    UpcomingModule,
    ApolloModule.withClient(provideClient),
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [ AppActions, ReduxRoots ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

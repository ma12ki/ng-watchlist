import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { NgReduxRouterModule, NgReduxRouter } from '@angular-redux/router';
import { NgReduxFormModule } from '@angular-redux/form';

import { ApolloModule, Apollo } from 'apollo-angular';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

import { provideClient } from './apollo-client-store';
import { AppActions } from './app.actions';
import { AppComponent } from './app.component';
import { IRootState, ReduxRoots } from './app.redux-roots';

import { DateInputToDateModule } from './date-input-to-date/date-input-to-date.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { UpcomingModule } from './upcoming/upcoming.module';
import { NewShowModule } from './new-show/new-show.module';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DateInputToDateModule,
    DictionaryModule,
    UpcomingModule,
    NewShowModule,
    ApolloModule.withClient(provideClient),
    RouterModule.forRoot([]),
    NgReduxModule,
    NgReduxRouterModule,
    NgReduxFormModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [ AppActions, ReduxRoots ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    private apollo: Apollo,
    private ngRedux: NgRedux<IRootState>,
    ngReduxRouter: NgReduxRouter,
    private actions: AppActions,
    reduxRoots: ReduxRoots,
  ) {
    ngRedux.configureStore(
      reduxRoots.rootReducer,
      {},
      reduxRoots.rootEpic,
      reduxRoots.middlewares
    );
    ngReduxRouter.initialize();
  }
}

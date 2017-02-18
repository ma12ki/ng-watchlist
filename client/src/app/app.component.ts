import { Component, OnInit } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Rx';
import gql from 'graphql-tag';

import { AppActions } from './app.actions';
import { IRootState } from './app.redux-roots';

@Component({
  selector: 'wl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cities$: Observable<any>;

  constructor(
    private apollo: Apollo,
    private ngRedux: NgRedux<IRootState>,
    private actions: AppActions,
  ) { }

  ngOnInit() {
    this.reload();
  }

  reload() {
    this.ngRedux.dispatch(this.actions.loadData());
    this.loadCities();
  }

  loadCities() {
    const query = gql`
      query CitiesQuery {
        allCities {
          name
          country
        }
      }
    `;

    this.cities$ = this.apollo.watchQuery<any>({
      query: query
    }).map(({data}) => data.allCities);
  }
}

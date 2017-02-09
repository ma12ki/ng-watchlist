import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { IShowType } from './show-types.interfaces';
import { showTypes } from './gql-mocks';

@Injectable()
export class ShowTypesService {
  constructor() { }

  load(): Observable<IShowType[]> {
    return Observable.of(showTypes)
      .map(({data}) => data.showTypes);
  }
}

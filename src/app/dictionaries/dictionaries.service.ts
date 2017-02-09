import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { IShowType } from './dictionaries.interfaces';
import { showTypes } from './gql-mocks';

@Injectable()
export class DictionariesService {

  constructor() { }

  loadShowTypes(): Observable<IShowType[]> {
    return Observable.of(showTypes)
      .map(({data}) => data.showTypes);
  }

}

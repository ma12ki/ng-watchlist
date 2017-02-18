import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { IShowFrequency } from './show-frequencies.interfaces';
import { showFrequencies } from './gql-mocks';

@Injectable()
export class ShowFrequenciesService {
  constructor() { }

  load(): Observable<IShowFrequency[]> {
    return Observable.of(showFrequencies)
      .map(({data}) => data.showFrequencies);
  }
}

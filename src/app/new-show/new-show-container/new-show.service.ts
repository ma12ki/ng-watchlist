import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

export interface IShowType {
  code: string;
  label: string;
}

const types = {
  data: {
    showTypes: [
      { code: 'MOVIE', label: 'Movie' },
      { code: 'TV', label: 'TV' },
      { code: 'ANIME', label: 'Anime' },
      { code: 'COMIC', label: 'Comic' },
    ]
  }
};

@Injectable()
export class NewShowService {

  constructor() { }

  loadShowTypes(): Observable<IShowType[]> {
    return Observable.of(types)
      .map(({data}) => data.showTypes);
  }
}

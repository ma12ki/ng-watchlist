import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ErrorHandlerService {

  constructor() {
    this.handleApolloError = this.handleApolloError.bind(this);
  }

  handleApolloError(error: any): Observable<any> {
    console.log(error);
    return Observable.empty();
  }

}

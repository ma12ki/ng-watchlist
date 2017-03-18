import { Injectable } from '@angular/core';

import {
  isRecurring,
  getCategory,
  ICategory,
} from '../../../../../../common/dictionary';

@Injectable()
export class DictionaryService {

  constructor() { }

  isRecurring(categoryId: string): boolean {
    return isRecurring(categoryId);
  }

  getCategory(categoryId: string): ICategory {
    return getCategory(categoryId);
  }

}

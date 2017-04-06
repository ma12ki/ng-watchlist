import { Injectable } from '@angular/core';

import {
  isRecurring,
  getCategory,
  ICategory,
  ICategoryVerbiage,
  getVerbiage,
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

  getVerbiage(categoryId: string): ICategoryVerbiage {
    return getVerbiage(categoryId);
  }

}

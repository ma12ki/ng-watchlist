import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AllShowsService } from '../all-shows.service';

import {
  categories, ICategory,
  frequencies, IFrequency
} from '../../../common/dictionary';

@Component({
  selector: 'wl-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.scss']
})
export class NewShowComponent implements OnInit {
  categories = categories;
  frequencies = frequencies;

  newShowForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private ass: AllShowsService
  ) {
    this.createForm();
  }

  createForm() {
    this.newShowForm = this.formBuilder.group({
      name: [ '', [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      category: [ '', [ Validators.required ] ],
      premiereDate: [ null, [ Validators.required ] ],
      recurring: this.formBuilder.group({
        season: [ null, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(2),
            Validators.pattern(/^[1-9][0-9]?$/)
          ]
        ],
        episodes: [ null, [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(3),
            Validators.pattern(/^[1-9][0-9]{0,2}$/)
          ]
        ],
        frequency: [ '', [ Validators.required ] ]
      })
    });

    this.setUpDisableRecurring();
  }

  setUpDisableRecurring(): void {
    this.newShowForm.get('category').valueChanges.subscribe(this.enableDisableRecurring.bind(this));
  }

  enableDisableRecurring(category: string): void {
    if (this.isRecurring(category)) {
      this.newShowForm.get('recurring').enable();
    } else {
      this.newShowForm.get('recurring').disable();
    }
  }

  ngOnInit() { }

  isRecurring(category: string): boolean {
    return this.categories.some((c) => c._id === category && c.recurring);
  }
}

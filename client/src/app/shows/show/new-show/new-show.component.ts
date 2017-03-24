import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';
import { Router } from '@angular/router';

import { ShowService } from '../show.service';
import { ShowActions } from '../show.actions';

import {
  categories, ICategory,
  frequencies, IFrequency
} from '../../shared/dictionary';

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
    private ngRedux: NgRedux<any>,
    private formBuilder: FormBuilder,
    private router: Router,
    private showService: ShowService,
    private showActions: ShowActions,
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

  save() {
    const {
      name,
      category,
      premiereDate,
      recurring,
    } = this.newShowForm.value;

    const show: any = {
      name,
      category,
      premiereDate,
    };

    // TODO: replace with object spread once "Cannot read property 'kind' of undefined" is resolved
    if (recurring) {
      show.season = recurring.season;
      show.episodes = recurring.episodes;
      show.frequency = recurring.frequency;
    }

    this.ngRedux.dispatch(this.showActions.saveStart(show));
  }

  cancel() {
    this.router.navigate(['/']);
  }
}

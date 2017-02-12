import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { IShowType } from '../../dictionary/show-types/show-types.interfaces';
import { IShowFrequency } from '../../dictionary/show-frequencies/show-frequencies.interfaces';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.scss']
})
export class NewShowComponent implements OnInit {
  @Input()
  showFrequencies: IShowFrequency[];

  @Input()
  showTypes: IShowType[];

  newShowForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
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
      type: [ '', [ Validators.required ] ],
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
    this.newShowForm.get('type').valueChanges.subscribe(this.enableDisableRecurring.bind(this));
  }

  enableDisableRecurring(type: string): void {
    if (this.isRecurring(type)) {
      this.newShowForm.get('recurring').enable();
    } else {
      this.newShowForm.get('recurring').disable();
    }
  }

  ngOnInit() { }

  isRecurring(showTypeCode: string): boolean {
    return this.showTypes.some((showType) => showType.code === showTypeCode && showType.recurring);
  }
}

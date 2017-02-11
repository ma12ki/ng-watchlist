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

  newShowFormFb: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.newShowFormFb = this.formBuilder.group({
      name: [ '', [
          Validators.required,
          Validators.maxLength(100)
        ]
      ],
      type: [ '', [ Validators.required ] ],
      premiereDate: [ '', [ Validators.required ] ],
      recurring: this.formBuilder.group({
        season: [ '', [
            Validators.required,
            Validators.minLength(1),
            Validators.maxLength(2),
            Validators.pattern(/^[1-9][0-9]?$/)
          ]
        ],
        episodes: [ '', [
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
    this.newShowFormFb.get('type').valueChanges.subscribe(this.enableDisableRecurring.bind(this));
  }

  enableDisableRecurring(type: string): void {
    if (this.isRecurring(type)) {
      this.newShowFormFb.get('recurring').enable();
    } else {
      this.newShowFormFb.get('recurring').disable();
    }
  }

  ngOnInit() { }

  isRecurring(showTypeCode: string): boolean {
    return this.showTypes.some((showType) => showType.code === showTypeCode && showType.recurring);
  }
}

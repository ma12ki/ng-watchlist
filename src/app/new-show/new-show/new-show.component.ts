import { Component, Input, OnInit } from '@angular/core';

import { IShowType } from '../new-show-container/new-show.service';
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

  constructor() { }

  ngOnInit() {
  }

}

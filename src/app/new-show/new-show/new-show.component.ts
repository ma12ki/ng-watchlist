import { Component, Input, OnInit } from '@angular/core';

import { IShowType } from '../new-show-container/new-show.service';

@Component({
  selector: 'app-new-show',
  templateUrl: './new-show.component.html',
  styleUrls: ['./new-show.component.scss']
})
export class NewShowComponent implements OnInit {
  @Input()
  showTypes: IShowType[];

  constructor() { }

  ngOnInit() {
  }

}

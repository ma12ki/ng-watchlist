import { Component, OnInit } from '@angular/core';
import { select } from '@angular-redux/store/lib/decorators/select';
import { NgRedux } from '@angular-redux/store/lib/components/ng-redux';

import { ShowFrequenciesActions, ShowTypesActions } from '../../dictionary';

@Component({
  selector: 'app-new-show-container',
  templateUrl: './new-show-container.component.html',
  styleUrls: ['./new-show-container.component.scss']
})
export class NewShowContainerComponent implements OnInit {
  @select(['dictionary', 'showFrequencies', 'items'])
  showFrequencies$;

  @select(['dictionary', 'showTypes', 'items'])
  showTypes$;

  constructor(
    private showFrequenciesActions: ShowFrequenciesActions,
    private showTypesActions: ShowTypesActions,
    private ngRedux: NgRedux<any>
  ) { }

  ngOnInit() {
    this.ngRedux.dispatch(this.showFrequenciesActions.load());
    this.ngRedux.dispatch(this.showTypesActions.load());
  }

}

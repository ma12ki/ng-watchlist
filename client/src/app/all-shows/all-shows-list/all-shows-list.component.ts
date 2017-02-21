import { Component, OnInit } from '@angular/core';

import { AllShowsService } from '../all-shows.service';

@Component({
  selector: 'wl-all-shows-list',
  templateUrl: './all-shows-list.component.html',
  styleUrls: ['./all-shows-list.component.scss']
})
export class AllShowsListComponent implements OnInit {

  constructor(
    private allShowsService: AllShowsService
  ) { }

  ngOnInit() {
  }

}

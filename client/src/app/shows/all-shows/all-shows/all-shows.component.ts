import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'wl-all-shows',
  templateUrl: './all-shows.component.html',
  styleUrls: ['./all-shows.component.scss']
})
export class AllShowsComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  navigateToNew() {
    this.router.navigateByUrl('shows/new');
  }

}

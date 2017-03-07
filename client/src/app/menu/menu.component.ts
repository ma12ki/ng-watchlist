import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wl-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: Array<any>;

  constructor() {
    this.initMenuItems();
  }

  initMenuItems() {
    this.items = [
      { link: '', icon: 'home', label: 'Dashboard' },
      { link: 'all', icon: 'list', label: 'All shows' },
      { link: 'new', icon: 'add', label: 'Add new' },
    ];
  }

  ngOnInit() {
  }

}

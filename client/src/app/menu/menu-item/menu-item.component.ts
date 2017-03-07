import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wl-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() item: Object;

  constructor() { }

  ngOnInit() {
  }

}

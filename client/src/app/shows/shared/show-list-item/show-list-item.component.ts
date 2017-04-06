import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wl-show-list-item',
  templateUrl: './show-list-item.component.html',
  styleUrls: ['./show-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShowListItemComponent implements OnInit {
  @Input() name: string;
  @Input() category: string;

  constructor() { }

  ngOnInit() {
  }

}

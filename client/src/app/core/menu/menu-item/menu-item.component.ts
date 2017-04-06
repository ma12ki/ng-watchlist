import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'wl-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent implements OnInit {
  @Input() item: any;
  isActive: boolean;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
    this.router.events.filter((event) => {
      return event instanceof NavigationEnd;
    })
    .subscribe((_event) => {
      this.isActive = this.router.isActive(this.item.link, true);
    });
  }

  navigate(link: string) {
    this.router.navigateByUrl(link);
  }

}

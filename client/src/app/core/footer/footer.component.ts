import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'wl-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  year = new Date().getFullYear();
}

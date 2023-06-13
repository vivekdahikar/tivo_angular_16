import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-tabs',
  templateUrl: './color-tabs.component.html',
  styleUrls: ['./color-tabs.component.scss'],
})
export class ColorTabsComponent {
  @Input() tabs: any;
}

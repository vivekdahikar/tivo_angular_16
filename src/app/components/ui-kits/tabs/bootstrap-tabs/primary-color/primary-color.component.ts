import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primary-color',
  templateUrl: './primary-color.component.html',
  styleUrls: ['./primary-color.component.scss'],
})
export class PrimaryColorComponent {
  HomeActive8 = 'home';

  @Input() tabs: any;
}

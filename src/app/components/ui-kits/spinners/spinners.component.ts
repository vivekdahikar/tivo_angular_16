import { Component } from '@angular/core';

@Component({
  selector: 'app-spinners',
  templateUrl: './spinners.component.html',
  styleUrls: ['./spinners.component.scss'],
})
export class SpinnersComponent {
  Loader: any = [];
  constructor() {
    for (let i = 0; i < 35; i++) {
      this.Loader.push(i + 1);
    }
  }
}

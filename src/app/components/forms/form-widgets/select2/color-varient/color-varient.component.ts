import { Component } from '@angular/core';

@Component({
  selector: 'app-color-varient',
  templateUrl: './color-varient.component.html',
  styleUrls: ['./color-varient.component.scss'],
})
export class ColorVarientComponent {
  colors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
    'inverse',
  ];
}

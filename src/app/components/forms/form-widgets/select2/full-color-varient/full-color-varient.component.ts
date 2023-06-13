import { Component } from '@angular/core';

@Component({
  selector: 'app-full-color-varient',
  templateUrl: './full-color-varient.component.html',
  styleUrls: ['./full-color-varient.component.scss'],
})
export class FullColorVarientComponent {
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

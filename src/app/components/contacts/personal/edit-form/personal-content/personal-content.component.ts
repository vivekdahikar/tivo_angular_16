import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-content',
  templateUrl: './personal-content.component.html',
  styleUrls: ['./personal-content.component.scss'],
})
export class PersonalContentComponent {
  public days = ['01', '02', '03', '04'];
  public months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}

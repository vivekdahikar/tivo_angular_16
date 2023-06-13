import { Component } from '@angular/core';
import {
  NgbDateStruct,
  NgbCalendar,
  NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent {
  model: NgbDateStruct | any;
  date: { year: number; month: number } | any;

  constructor(private calendar: NgbCalendar) {}
}

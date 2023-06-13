import { Component } from '@angular/core';

@Component({
  selector: 'app-pagination-color',
  templateUrl: './pagination-color.component.html',
  styleUrls: ['./pagination-color.component.scss'],
})
export class PaginationColorComponent {
  pagination = ['primary', 'secondary', 'success', 'info', 'warning', 'danger'];
}

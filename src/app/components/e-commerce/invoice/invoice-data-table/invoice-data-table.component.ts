import { Component } from '@angular/core';
import * as data from '../../../../shared/data/component/e-commerce/invoice';

@Component({
  selector: 'app-invoice-data-table',
  templateUrl: './invoice-data-table.component.html',
  styleUrls: ['./invoice-data-table.component.scss'],
})
export class InvoiceDataTableComponent {
  public invoice = data.invoice;
}

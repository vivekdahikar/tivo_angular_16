import { Component } from '@angular/core';
import * as productData from '../../../../shared/data/component/dashboard/default/default';

@Component({
  selector: 'app-total-appointment',
  templateUrl: './total-appointment.component.html',
  styleUrls: ['./total-appointment.component.scss'],
})
export class TotalAppointmentComponent {
  public appointment = productData.appointment;
}

import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-print-model',
  templateUrl: './print-model.component.html',
  styleUrls: ['./print-model.component.scss'],
})
export class PrintModelComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

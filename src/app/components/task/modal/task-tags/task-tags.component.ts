import { Component } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-task-tags',
  templateUrl: './task-tags.component.html',
  styleUrls: ['./task-tags.component.scss'],
})
export class TaskTagsComponent {
  constructor(public activeModal: NgbActiveModal) {}
}

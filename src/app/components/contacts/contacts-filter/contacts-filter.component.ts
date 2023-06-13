import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewContactsComponent } from '../new-contacts/new-contacts.component';

@Component({
  selector: 'app-contacts-filter',
  templateUrl: './contacts-filter.component.html',
  styleUrls: ['./contacts-filter.component.scss'],
})
export class ContactsFilterComponent {
  public type: any;
  open = false;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}
  // manu open
  openMenu() {
    this.open = !this.open;
  }
  openNewContact() {
    const modalRef = this.modalService.open(NewContactsComponent, {
      size: 'lg',
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookmarkComponent } from '../model/add-bookmark/add-bookmark.component';
import { CreateTagComponent } from '../model/create-tag/create-tag.component';

@Component({
  selector: 'app-bookmark-profile',
  templateUrl: './bookmark-profile.component.html',
  styleUrls: ['./bookmark-profile.component.scss'],
})
export class BookmarkProfileComponent {
  OpenFilter: boolean = false;
  @ViewChild('addbookmark') AddBookmark!: AddBookmarkComponent;
  public listBookmark: boolean = false;
  constructor(private modalService: NgbModal) {}
  open = false;
  ngOnInit(): void {}

  // manu open
  openMenu() {
    this.open = !this.open;
  }

  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark;
  }

  openAddBookmark() {
    const modalRef = this.modalService.open(AddBookmarkComponent, {
      size: 'lg',
    });
  }

  openTagModel() {
    const modalRef = this.modalService.open(CreateTagComponent, { size: 'lg' });
  }
}

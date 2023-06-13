import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as bookmarkData from '../../../shared/data/component/bookmark/bookmark';
import { EditBookmarkComponent } from '../model/edit-bookmark/edit-bookmark.component';

@Component({
  selector: 'app-create-bookmarks',
  templateUrl: './create-bookmarks.component.html',
  styleUrls: ['./create-bookmarks.component.scss'],
})
export class CreateBookmarksComponent {
  public bookmarks = bookmarkData.bookmarks;
  public listBookmark: boolean = false;

  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  editBookmarkModel() {
    const modalRef = this.modalService.open(EditBookmarkComponent);
  }

  changeLayoutBookmark() {
    this.listBookmark = !this.listBookmark;
  }
}

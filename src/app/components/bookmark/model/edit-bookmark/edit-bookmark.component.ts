import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as bookmarkData from '../../../../shared/data/component/bookmark/bookmark';

@Component({
  selector: 'app-edit-bookmark',
  templateUrl: './edit-bookmark.component.html',
  styleUrls: ['./edit-bookmark.component.scss'],
})
export class EditBookmarkComponent {
  public bookmarks = bookmarkData.bookmarks;

  constructor(public activeModal: NgbActiveModal) {}
}

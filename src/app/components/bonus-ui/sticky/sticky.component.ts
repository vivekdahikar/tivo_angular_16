import { Component, ElementRef } from '@angular/core';
import * as data from '../../../shared/data/component/bonus-ui/sticky';
export interface Notes {
  id: number;
  isDeleted: boolean
}
@Component({
  selector: 'app-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.scss'],
})
export class StickyComponent {
  public notes: Notes[] = data.sticky;

  constructor(private eRef: ElementRef) {}

  ngOnInit() {}

  //Add new sticky note
  addStickyNote() {
    this.notes.push({ id: this.notes.length + 1, isDeleted: false });
  }

  //Delete a particulr sticky note
  deleteNote(note: any) {
    note.isDeleted = true;
  }
}

import { Component } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-email-compose",
  templateUrl: "./email-compose.component.html",
  styleUrls: ["./email-compose.component.scss"],
})
export class EmailComposeComponent {
  files: File[] = [];

  // data

  public ClassicEditor: any = ClassicEditor;

  constructor() {}

  // add file
  onSelect(event: any) {
    this.files.push(...event.addedFiles);
  }
  // remove file
  onRemove(event: any) {
    this.files.splice(this.files.indexOf(event), 1);
  }
  ngOnInit(): void {}
}

import { Component } from "@angular/core";

@Component({
  selector: "app-file-manager-sidebar",
  templateUrl: "./file-manager-sidebar.component.html",
  styleUrls: ["./file-manager-sidebar.component.scss"],
})
export class FileManagerSidebarComponent {
  open = false;

  constructor() {}

  ngOnInit(): void {}
  // manu open
  openMenu() {
    this.open = !this.open;
  }
}

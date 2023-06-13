import { Component } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { allIcon } from "../../../shared/data/component/icon/thimigy";
@Component({
  selector: "app-feather-ico",
  templateUrl: "./feather-ico.component.html",
  styleUrls: ["./feather-ico.component.scss"],
})
export class FeatherIcoComponent {
  public detail: boolean = false;
  public flag: string | any;
  public val: string | any;
  public icon: string | any;

  public allIconData = allIcon.feather;

  constructor(public toastrService: ToastrService) {}

  toggleWithInfo(icon: string) {
    this.detail = true;
    this.icon = icon;
    this.val = '<app-feather-icon [icon]="' + icon + '"></app-feather-icon>';
  }
  copyText(val: string) {
    let selBox = document.createElement("textarea");
    selBox.style.position = "fixed";
    selBox.style.left = "0";
    selBox.style.top = "0";
    selBox.style.opacity = "0";
    selBox.value =
      '<app-feather-icon [icon]="' + val + '"></app-feather-icon>>';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand("copy");
    document.body.removeChild(selBox);
    this.toastrService.show(
      '<p class="mb-0 mt-1">Code Copied to clipboard</p>',
      "",
      {
        closeButton: true,
        enableHtml: true,
        positionClass: "toast-bottom-right",
      }
    );
  }
  ngOnInit(): void {}
}

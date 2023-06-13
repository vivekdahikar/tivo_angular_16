import { Component, HostListener, Inject } from "@angular/core";
import { NavService } from "src/app/shared/services/nav/nav.service";
import { LayoutService } from "src/app/shared/services/layout/layout.service";
import { DOCUMENT } from "@angular/common";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  public dark: boolean =
    this.layout.config.settings.layout_version == "dark-only" ? true : false;

  collapseSidebar: boolean = true;
  constructor(
    private navServices: NavService,
    public layout: LayoutService,
    @Inject(DOCUMENT) private document: Document
  ) {}

  sidebarToggle() {
    this.navServices.collapseSidebar = !this.navServices.collapseSidebar;
  }

  layoutToggle() {
    this.document.body.classList.toggle("dark-only");
    this.dark = !this.dark;
  }
  languageToggle() {
    this.navServices.language = !this.navServices.language;
  }
  searchToggle() {
    this.navServices.search = true;
  }
  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    const element = document.getElementById("sidebar-toggle");
    if (element && window.innerWidth > 1199) {
      element.style.display = "none";
    } else if (element) {
      element.style.display = "block";
    }
  }
}

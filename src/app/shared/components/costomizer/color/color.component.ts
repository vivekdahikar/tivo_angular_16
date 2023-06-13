import { Component, HostBinding } from "@angular/core";
import { LayoutService } from "src/app/shared/services/layout/layout.service";

@Component({
  selector: "app-color",
  templateUrl: "./color.component.html",
  styleUrls: ["./color.component.scss"],
})
export class ColorComponent {
  public MIXLayout: string = "default";
  @HostBinding("@.disabled")
  public selectedValue: any;
  public primary_color: string = "#5c61f2";
  public secondary_color: string = "#eeb82f";

  constructor(public layout: LayoutService) {}

  ngOnInit(): void {
    this.primary_color = localStorage.getItem('primary_color') || '#5c61f2';
    this.secondary_color = localStorage.getItem('secondary_color') || '#eeb82f';
    document.documentElement.style.setProperty(
      "--theme-deafult",
      this.primary_color
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      this.secondary_color
    );
  }

  applyColor() {
    localStorage.setItem('primary_color', this.primary_color);
    localStorage.setItem('secondary_color', this.secondary_color);

    document.documentElement.style.setProperty(
      "--theme-deafult",
      this.primary_color
    );
    document.documentElement.style.setProperty(
      "--theme-secondary",
      this.secondary_color
    );
    this.layout.config.color.primary_color = this.primary_color;
    this.layout.config.color.secondary_color = this.secondary_color;
  
  }
  
  resetColor() {
    document.documentElement.style.setProperty("--theme-deafult", "#24695c");
    document.documentElement.style.setProperty("--theme-secondary", "#ba895d");
    (<HTMLInputElement>document.getElementById("ColorPicker1")).value =
      "#24695c";
    (<HTMLInputElement>document.getElementById("ColorPicker2")).value =
      "#ba895d";

    this.layout.config.color.primary_color = "#24695c";
    this.layout.config.color.secondary_color = "#ba895d";
  }

  customizeMixLayout(val: any) {
    this.MIXLayout = val;
    this.layout.config.settings.layout_version = val;
    document.body?.classList.remove("light-only", "dark-sidebar", "dark-only");
    if (val === "default") {
      document.body?.classList.add("light-only");
    } else if (val === "dark-sidebar") {
      document.body?.classList.add("dark-sidebar");
    } else {
      document.body?.classList.add("dark-only");
    }
  }
}

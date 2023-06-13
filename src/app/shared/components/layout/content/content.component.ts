import {
  Component,
  HostListener,
  AfterViewInit,
  ChangeDetectorRef,
} from "@angular/core";
import * as feather from "feather-icons";

import { ActivatedRoute, Router, RouterOutlet } from "@angular/router";
import { NavService } from "src/app/shared/services/nav/nav.service";
import { LayoutService } from "src/app/shared/services/layout/layout.service";
import { fader, slider } from "../../../data/animation/animation";

@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.scss"],
  animations: [slider],
})
export class ContentComponent {
  footerDark: any;
  footerLight: any;
  footerFix: any;
  Scorlled: any;
  public show: boolean = true;
  public width = window.innerWidth;
  public screenwidth: any = window.innerWidth;
  

  constructor(
    public navServices: NavService,
    public layout: LayoutService,
    private changeRef: ChangeDetectorRef,
    public route: ActivatedRoute
  ) {}

  @HostListener("window:resize", ["$event"])
  onResize(event: any) {
    this.screenwidth = event.target.innerWidth;

    if (this.screenwidth < 991) {
      return (this.layout.config.settings.sidebar = "compact-wrapper");
    } else {
      return (this.layout.config.settings.sidebar =
        this.layout.config.settings.sidebar || "horizontal-wrapper");
    }
  }

  ngAfterViewInit() {
    this.changeRef.detectChanges();
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet: any) {
    return outlet.isActivated ? outlet.activatedRoute : "";
  }
  ngOnInit(): void {}

  ngDoCheck() {
    if (window.location.pathname == "/page-layout/footer-dark") {
      this.footerDark = true;
      this.footerLight = false;
      this.footerFix = false;
      this.Scorlled = false;
    } else if (window.location.pathname == "/page-layout/footer-light") {
      this.footerLight = true;
      this.footerDark = false;
      this.footerFix = false;
      this.Scorlled = false;
    } else if (window.location.pathname == "/page-layout/footer-fixed") {
      this.footerFix = true;
      this.footerLight = false;
      this.footerDark = false;
      this.Scorlled = false;
    } else if (window.location.pathname == "/page-layout/hide-nav-scroll") {
      this.Scorlled = true;
      this.footerFix = false;
      this.footerLight = false;
      this.footerDark = false;
    }
  }

  @HostListener("window:scroll", [])
  scrollHandler() {
    let number =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (window.location.pathname == "/page-layout/hide-nav-scroll") {
      if (number > 600) {
        this.show = true;
      } else if (number === 0) {
        this.show = true;
      } else {
        this.show = false;
      }
    }
  }

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }
} 
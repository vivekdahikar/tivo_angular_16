import { Component, Input } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-featured-tutorials",
  templateUrl: "./featured-tutorials.component.html",
  styleUrls: ["./featured-tutorials.component.scss"],
})
export class FeaturedTutorialsComponent {
  @Input() data: any;
  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
  }
}

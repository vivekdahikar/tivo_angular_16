import { Component } from "@angular/core";
import { NgbRatingConfig } from "@ng-bootstrap/ng-bootstrap";
import * as jobs from "../../../shared/data/component/job-search/job-search";

@Component({
  selector: "app-job-details",
  templateUrl: "./job-details.component.html",
  styleUrls: ["./job-details.component.scss"],
})
export class JobDetailsComponent {
  public jobCard = jobs.jobCards;
  public jobCards: any[] = [];

  constructor(public config: NgbRatingConfig) {
    config.max = 5;
    config.readonly = true;
    this.jobCards = this.jobCard.slice(0, 4);
  }

  ngOnInit(): void {}
}

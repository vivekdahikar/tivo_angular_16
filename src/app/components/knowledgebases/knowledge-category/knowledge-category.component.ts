import { Component } from "@angular/core";
import * as categoriesData from "../../../shared/data/component/knowledgebases/knowledgebases";
@Component({
  selector: "app-knowledge-category",
  templateUrl: "./knowledge-category.component.html",
  styleUrls: ["./knowledge-category.component.scss"],
})
export class KnowledgeCategoryComponent {
  public categories = categoriesData.categories;
}

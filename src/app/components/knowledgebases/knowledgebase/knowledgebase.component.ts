import { Component } from '@angular/core';
import * as Tutorials from '../../../shared/data/component/knowledgebases/knowledgebases';

@Component({
  selector: 'app-knowledgebase',
  templateUrl: './knowledgebase.component.html',
  styleUrls: ['./knowledgebase.component.scss'],
})
export class KnowledgebaseComponent {
  public featuredTutorials = Tutorials.featuredTutorials;

  constructor() {}

  ngOnInit(): void {}
}

import { Component } from '@angular/core';
import * as learningData from '../../../shared/data/component/learning/learning';

@Component({
  selector: 'app-learning-list',
  templateUrl: './learning-list.component.html',
  styleUrls: ['./learning-list.component.scss'],
})
export class LearningListComponent {
  public learning = learningData.learning;
  public learningTop = learningData.learningTop;
}

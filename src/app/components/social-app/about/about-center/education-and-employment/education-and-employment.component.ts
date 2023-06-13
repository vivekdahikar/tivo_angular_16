import { Component } from '@angular/core';
import * as education from '../../../../../shared/data/component/social-app/social-app';

@Component({
  selector: 'app-education-and-employment',
  templateUrl: './education-and-employment.component.html',
  styleUrls: ['./education-and-employment.component.scss'],
})
export class EducationAndEmploymentComponent {
  public educationData = education.educationData;

}

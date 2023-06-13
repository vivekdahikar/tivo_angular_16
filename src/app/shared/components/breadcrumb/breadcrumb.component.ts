import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() title: any;
  @Input() items!: any[];
  @Input() active_item: any;

  constructor() {}

  ngOnInit(): void {}
}

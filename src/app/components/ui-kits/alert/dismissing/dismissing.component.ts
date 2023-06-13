import { Component } from '@angular/core';

@Component({
  selector: 'app-dismissing',
  templateUrl: './dismissing.component.html',
  styleUrls: ['./dismissing.component.scss'],
})
export class DismissingComponent {
  constructor() {}

  ngOnInit(): void {}

  deleteMsg(id: any) {
    this.data.map((elem, i) => {
      elem.id == id && this.data.splice(i, 1);
    });
  }

  data = [
    {
      id: 1,
      icon: 'clock',
      color: 'primary',
    },
    {
      id: 2,
      icon: 'heart',
      color: 'secondary',
    },
    {
      id: 3,
      icon: 'thumbs-up',
      color: 'success',
    },
    {
      id: 4,
      icon: 'help-circle',
      color: 'info',
    },
    {
      id: 5,
      icon: 'bell',
      color: 'warning',
    },
    {
      id: 6,
      icon: 'thumbs-down',
      color: 'danger',
    },
    {
      id: 7,
      icon: 'alert-triangle',
      color: 'light',
    },
    {
      id: 8,
      icon: 'alert-circle',
      color: 'dark',
    },
  ];
}

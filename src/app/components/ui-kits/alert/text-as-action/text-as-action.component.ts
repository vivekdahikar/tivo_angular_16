import { Component } from '@angular/core';

@Component({
  selector: 'app-text-as-action',
  templateUrl: './text-as-action.component.html',
  styleUrls: ['./text-as-action.component.scss'],
})
export class TextAsActionComponent {
  constructor() {}
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
      color: 'light text-dark',
    },
    {
      id: 8,
      icon: 'alert-circle',
      color: 'dark',
    },
  ];
  ngOnInit(): void {}
}

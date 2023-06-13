import { Component } from '@angular/core';

@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss'],
})
export class AvatarsComponent {
  images = [
    {
      imgSize: '100',
      img: 'assets/images/user/1.jpg',
      shape: 'b-r-30',
      bgColor: 'primary',
    },
    {
      imgSize: '90',
      img: 'assets/images/user/1.jpg',
      shape: 'b-r-35',
      bgColor: 'secondary',
    },
    {
      imgSize: '80',
      img: 'assets/images/user/1.jpg',
      shape: 'rounded-circle',
      bgColor: 'success',
    },
    {
      imgSize: '70',
      img: 'assets/images/user/1.jpg',
      shape: 'b-r-25',
      bgColor: 'info',
    },
    {
      imgSize: '60',
      img: 'assets/images/user/1.jpg',
      shape: 'b-r-15',
      bgColor: 'danger',
    },
    {
      imgSize: '50',
      img: 'assets/images/user/1.jpg',
      shape: 'b-r-15',
      bgColor: 'dark',
    },
    {
      imgSize: '40',
      img: 'assets/images/user/1.jpg',
      shape: 'b-r-15',
      bgColor: 'warning',
    },
  ];

  images2 = [
    {
      imgSize: '70',
      images: [
        {
          img: 'assets/images/user/5.jpg',
        },
        {
          img: 'assets/images/user/4.jpg',
        },
        {
          img: 'assets/images/user/1.jpg',
        },
      ],
    },
    {
      imgSize: '60',
      images: [
        {
          img: 'assets/images/user/5.jpg',
        },
        {
          img: 'assets/images/user/4.jpg',
        },
        {
          img: 'assets/images/user/1.jpg',
        },
      ],
    },
    {
      imgSize: '50',
      images: [
        {
          img: 'assets/images/user/5.jpg',
        },
        {
          img: 'assets/images/user/4.jpg',
        },
        {
          img: 'assets/images/user/1.jpg',
        },
      ],
    },
  ];

  initials = [
    {
      imgSize: '100',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '90',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '80',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '70',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '60',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '50',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '40',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '30',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '20',
      img: 'assets/images/user/1.jpg',
    },
    {
      imgSize: '10',
      img: 'assets/images/user/1.jpg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}

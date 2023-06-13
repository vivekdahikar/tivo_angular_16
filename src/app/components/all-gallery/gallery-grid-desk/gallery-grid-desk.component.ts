import { Component } from '@angular/core';
import {
  Gallery,
  GalleryItem,
  ImageItem,
  ThumbnailsPosition,
  ImageSize,
} from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-gallery-grid-desk',
  templateUrl: './gallery-grid-desk.component.html',
  styleUrls: ['./gallery-grid-desk.component.scss'],
})
export class GalleryGridDeskComponent {
  items: GalleryItem[] | any;

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    this.items = this.imageData.map(
      (item) => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl })
    );
    const lightboxRef = this.gallery.ref('lightbox');
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
    });
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'assets/images/lightgallry/01.jpg',
    previewUrl: 'assets/images/lightgallry/01.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/02.jpg',
    previewUrl: 'assets/images/lightgallry/02.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/03.jpg',
    previewUrl: 'assets/images/lightgallry/03.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/04.jpg',
    previewUrl: 'assets/images/lightgallry/04.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/05.jpg',
    previewUrl: 'assets/images/lightgallry/05.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/06.jpg',
    previewUrl: 'assets/images/lightgallry/06.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/07.jpg',
    previewUrl: 'assets/images/lightgallry/07.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/08.jpg',
    previewUrl: 'assets/images/lightgallry/08.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/09.jpg',
    previewUrl: 'assets/images/lightgallry/09.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/010.jpg',
    previewUrl: 'assets/images/lightgallry/010.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/011.jpg',
    previewUrl: 'assets/images/lightgallry/011.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
  {
    srcUrl: 'assets/images/lightgallry/012.jpg',
    previewUrl: 'assets/images/lightgallry/012.jpg',
    title: 'Portfolio Title',
    decs: "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.",
  },
];

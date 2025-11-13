import {Component, signal, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule, IMAGE_CONFIG, NgOptimizedImage} from '@angular/common';
import {ImageObject, RmImageSliderComponent} from 'rm-image-slider';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgOptimizedImage,
    RmImageSliderComponent,
    CommonModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    {
      provide: IMAGE_CONFIG,
      useValue: {
        disableImageSizeWarning: true,
        disableImageLazyLoadWarning: true
      }
    },
  ]
})
export class App {
  protected readonly title = signal('photo');
  items: number [] = [];
  anotherItems: number [] = [];
  @ViewChild('nav') slider: any;
  any: any[] = [];

  imageObject: Array<ImageObject> = [
    {
    image: 'assets/images/1.jpg',
    thumbImage: 'assets/images/1.jpeg',
    alt: 'alt of image',
    title: '1',
    index: 1
  },
    {
      image: 'assets/images/2.jpg',
      thumbImage: 'assets/images/2.jpeg',
      alt: 'alt of image',
      title: '2',
      index: 2
    },
    {
      image: 'assets/images/3.jpg',
      thumbImage: 'assets/images/3.jpeg',
      alt: 'alt of image',
      title: '3',
      index: 3
    },
  ];

  constructor() {
    for (let i = 1; i <= 34; i++) {
      this.items.push(i)
/*      this.any.push(
        {
          image: 'assets/images/1.jpg',
          thumbImage: 'assets/images/1.jpeg',
          alt: 'alt of image',
          title: `${i-1}`,
          index: i
        }
      );
      this.imageObject = this.any;*/
    }


    for (let i = 36; i <= 83; i++) {

      this.anotherItems.push(i);
    }

  }

  prevImageClick() {
    this.slider.prev();
  }

  sliderOpen(index: number) {
    console.log('index', index);
    this.slider.imageOnClick(index);
  }

  nextImageClick() {
    this.slider.next();
  }

}

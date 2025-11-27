import {Component, signal, ViewChild} from '@angular/core';
import {ImageObject} from 'rm-image-slider';

@Component({
  standalone: false,
  selector: 'app-portfolio',
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {
  protected readonly title = signal('photo');

  items: number [] = [];
  anotherItems: number [] = [];
  @ViewChild('nav') slider: any;
  any: any[] = [];

  imageObject: Array<ImageObject>
  /*    = [
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
    ];*/

  constructor() {
    for (let i = 1; i <= 93; i++) {

      this.any.push(
        {
          image: `assets/images/${i}.jpg`,
          thumbImage: `assets/images/${i}.jpeg`,
          alt: `${i}`,
          title: `${i}`,
          index: i
        }
      );
      this.imageObject = this.any;

    }

    for (let i = 1; i <= 36; i++) {
      this.items.push(i)
    }


    for (let i = 37; i <= 93; i++) {

      this.anotherItems.push(i);
    }

  }

  prevImageClick() {
    this.slider.prev();
  }

  sliderOpen(index: number) {
    this.slider.imageOnClick(index);
  }

  nextImageClick() {
    this.slider.next();
  }

}

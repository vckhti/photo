import {Component, signal, ViewChild} from '@angular/core';
import {ImageObject} from 'rm-image-slider';

@Component({
  standalone: false,
  selector: 'app-sport',
  templateUrl: './sport.html',
  styleUrl: './sport.scss'
})
export class SportComponent {
  protected readonly title = signal('photo');

  items: number [] = [];
  anotherItems: number [] = [];
  @ViewChild('nav') slider: any;
  any: any[] = [];

  imageObject: Array<ImageObject>

  constructor() {
    //console.log('SportComponent');
    for (let i = 1; i <= 24; i++) {

      this.any.push(
        {
          image: `assets/images/sport/${i}.jpg`,
          thumbImage: `assets/images/sport/${i}.jpeg`,
          alt: `${i}`,
          title: `${i}`,
          index: i
        }
      );
      this.imageObject = this.any;

    }

    for (let i = 1; i <= 12; i++) {
      this.items.push(i)
    }


    for (let i = 13; i <= 24; i++) {

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

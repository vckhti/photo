import {Component, signal, ViewChild} from '@angular/core';
import {ImageObject} from 'rm-image-slider';

@Component({
  standalone: false,
  selector: 'app-landscape',
  templateUrl: './landscape.html',
  styleUrl: './landscape.scss'
})
export class LandscapeComponent {
  protected readonly title = signal('photo');

  items: number [] = [];
  anotherItems: number [] = [];
  @ViewChild('nav') slider: any;
  any: any[] = [];

  imageObject: Array<ImageObject>

  constructor() {
    console.log('LandScapeComponent');
    for (let i = 1; i <= 20; i++) {

      this.any.push(
        {
          image: `assets/images/landscape/${i}.jpg`,
          thumbImage: `assets/images/landscape/${i}.jpeg`,
          alt: `${i}`,
          title: `${i}`,
          index: i
        }
      );
      this.imageObject = this.any;

    }

    for (let i = 3; i <= 20; i++) {
      this.items.push(i)
    }


    for (let i = 1; i <= 20; i++) {

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

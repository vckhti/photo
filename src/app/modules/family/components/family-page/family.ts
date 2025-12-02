import {Component, signal, ViewChild} from '@angular/core';
import {ImageObject} from 'rm-image-slider';

@Component({
  standalone: false,
  selector: 'app-family',
  templateUrl: './family.html',
  styleUrl: './family.scss'
})
export class FamilyComponent {
  protected readonly title = signal('photo');

  items: number [] = [];
  anotherItems: number [] = [];
  @ViewChild('nav') slider: any;
  any: any[] = [];

  imageObject: Array<ImageObject>

  constructor() {
    console.log('FamilyComponent');
    for (let i = 1; i <= 22; i++) {

      this.any.push(
        {
          image: `assets/images/family/${i}.jpg`,
          thumbImage: `assets/images/family/${i}.jpeg`,
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


    for (let i = 13; i <= 21; i++) {

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

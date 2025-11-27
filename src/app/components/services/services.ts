import {Component, signal, ViewChild} from '@angular/core';
import {ImageObject} from 'rm-image-slider';

@Component({
  standalone: false,
  selector: 'app-services',
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  @ViewChild('nav') slider: any;
  protected readonly title = signal('photo');
  imageObject: Array<ImageObject>
      = [
      {
      image: 'assets/images/208.jpg',
      thumbImage: 'assets/images/208.jpeg',
      alt: '208',
      title: '208',
      index: 208
    },
      {
        image: 'assets/images/41.jpg',
        thumbImage: 'assets/images/41.jpeg',
        alt: '41',
        title: '41',
        index: 41
      },
      {
        image: 'assets/images/64.jpg',
        thumbImage: 'assets/images/64.jpeg',
        alt: '64',
        title: '64',
        index: 64
      },
    ];

  sliderOpen(index: number) {
    console.log('index',index);
    this.slider.imageOnClick(index);
  }
}

import {Component, signal, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule, IMAGE_CONFIG, NgOptimizedImage} from '@angular/common';
import {ImageObject, RmImageSliderComponent} from 'rm-image-slider';

@Component({
  standalone: false,
  selector: 'app-root',
/*   imports: [
   RouterOutlet,
    NgOptimizedImage,
    RmImageSliderComponent,
    CommonModule
  ],*/
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

}

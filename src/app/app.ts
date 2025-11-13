import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CommonModule, IMAGE_CONFIG, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NgOptimizedImage,
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

  constructor() {
    for (let i = 1; i <= 35; i++) {
      this.items.push(i);
    }

    for (let i = 35; i <= 83; i++) {
      this.anotherItems.push(i);
    }
    console.log('items', this.items);
  }


}

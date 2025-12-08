import {Component, Input, Output, signal, EventEmitter} from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-js-post-up',
  templateUrl: './js-post-up-component.html',
  styleUrl: './js-post-up-component' +
    '.scss'
})
export class JsPostUpComponent {
  @Input() path: string ;
  @Input() item: number;
  @Input() orientationWidth: number = 800;
  @Input() orientationHeight: number = 600;
  @Output() itemClick = new EventEmitter<number>();
  protected readonly title = signal('photo');

  isLoad = false;


  onImageLoad(): void {
    //console.log('onImageLoad');
    this.isLoad = true;
  }
}

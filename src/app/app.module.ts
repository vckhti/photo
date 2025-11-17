import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {App} from './app';
import {RouterOutlet} from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RmImageSliderComponent} from 'rm-image-slider';
import {JsPostUpComponent} from './components/js-post-up/js-post-up-component';





@NgModule({
  declarations: [
    JsPostUpComponent,
    App
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    NgOptimizedImage,
    RmImageSliderComponent,
    CommonModule
  ],
  providers: [

  ],
  bootstrap: [
    App
  ]
})
export class AppModule {}

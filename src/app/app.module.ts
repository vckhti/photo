import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {App} from './app';
import {RouterOutlet} from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RmImageSliderComponent} from 'rm-image-slider';
import {JsPostUpComponent} from './components/js-post-up/js-post-up-component';
import {AppRoutingModule} from './app-routing.module';
import {Services} from './components/services/services';
import {Contacts} from './components/contacts/contacts';
import {Portfolio} from './components/portfolio/portfolio';





@NgModule({
  declarations: [
    JsPostUpComponent,
    Portfolio,
    Services,
    Contacts,
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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

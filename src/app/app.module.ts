import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import {App} from './app';
import {RouterOutlet} from '@angular/router';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RmImageSliderComponent} from 'rm-image-slider';
import {AppRoutingModule} from './app-routing.module';
import {Services} from './components/services/services';
import {Contacts} from './components/contacts/contacts';
import {PostComponentsModule} from './shared/modules/post-components.module';
import {SportModule} from './modules/sport/sport.module';
import {LandscapeModule} from './modules/landscape/landscape.module';
import {PortfolioModule} from './modules/portfolio/portfolio.module';
import {AboutModule} from './modules/about/about.module';





@NgModule({
  declarations: [
    Services,
    Contacts,
    App
  ],
  imports: [
    BrowserModule,
    AboutModule,
    PortfolioModule,
    SportModule,
    LandscapeModule,
    AppRoutingModule,
    PostComponentsModule,
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

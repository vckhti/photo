import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RmImageSliderComponent} from 'rm-image-slider';
import {PostComponentsModule} from '../../shared/modules/post-components.module';
import {Portfolio} from './components/portfolio/portfolio';


@NgModule({
  declarations: [
    Portfolio
  ],
  imports: [
    CommonModule,
    PostComponentsModule,
    NgOptimizedImage,
    RmImageSliderComponent,
    RouterModule.forChild([
      {path: '', component: Portfolio},
    ])
  ],
  exports: [
    RouterModule],
})

export class PortfolioModule {

}

import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RmImageSliderComponent} from 'rm-image-slider';
import {PostComponentsModule} from '../../shared/modules/post-components.module';
import {AboutComponents} from './components/portfolio/about';


@NgModule({
  declarations: [
    AboutComponents
  ],
  imports: [
    CommonModule,
    PostComponentsModule,
    NgOptimizedImage,
    RmImageSliderComponent,
    RouterModule.forChild([
      {path: '', component: AboutComponents},
    ])
  ],
  exports: [
    RouterModule],
})

export class AboutModule {

}

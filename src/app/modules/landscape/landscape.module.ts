import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RmImageSliderComponent} from 'rm-image-slider';
import {PostComponentsModule} from '../../shared/modules/post-components.module';
import {LandscapeComponent} from './components/sport-page/landscape';


@NgModule({
  declarations: [
    LandscapeComponent
  ],
  imports: [
    CommonModule,
    PostComponentsModule,
    NgOptimizedImage,
    RmImageSliderComponent,
    RouterModule.forChild([
      {path: '', component: LandscapeComponent},
    ])
  ],
  exports: [
    RouterModule],
})

export class LandscapeModule {

}

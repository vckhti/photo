import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RmImageSliderComponent} from 'rm-image-slider';
import {PostComponentsModule} from '../../shared/modules/post-components.module';
import {SportComponent} from './components/sport-page/sport';


@NgModule({
  declarations: [
    SportComponent,
  ],
  imports: [
    CommonModule,
    PostComponentsModule,
    NgOptimizedImage,
    RmImageSliderComponent,
    RouterModule.forChild([
      {path: '', component: SportComponent},
    ])
  ],
  exports: [
    RouterModule],
})

export class SportModule {

}

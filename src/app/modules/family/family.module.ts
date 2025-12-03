import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FamilyComponent} from './components/family-page/family';
import {RmImageSliderComponent} from 'rm-image-slider';
import {PostComponentsModule} from '../../shared/modules/post-components.module';


@NgModule({
  declarations: [
    FamilyComponent,
  ],
  imports: [
    CommonModule,
    PostComponentsModule,
    NgOptimizedImage,
    RmImageSliderComponent,
    RouterModule.forChild([
      {path: '', component: FamilyComponent},
    ])
  ],
  exports: [
    RouterModule],
})

export class FamilyModule {

}

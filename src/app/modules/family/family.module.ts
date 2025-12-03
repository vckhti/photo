import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FamilyComponent} from './components/family-page/family';
import {RmImageSliderComponent} from 'rm-image-slider';
import {FamilyLayoutComponent} from './components/family-layout/family-layout.component';
import {PostComponentsModule} from '../../shared/modules/post-components.module';


@NgModule({
  declarations: [
    FamilyComponent,
    FamilyLayoutComponent,
  ],
  imports: [
    CommonModule,
    PostComponentsModule,
    NgOptimizedImage,
    RmImageSliderComponent,
    RouterModule.forChild([
      {
        path: '', component: FamilyLayoutComponent, children: [
          {path: '', redirectTo: '/family/family', pathMatch: 'full'},
          {path: 'family', component: FamilyComponent},
        ]

      }
    ])
  ],
  exports: [
    RouterModule],
})

export class FamilyModule {

}

import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FamilyComponent} from './components/family-page/family';
import {RmImageSliderComponent} from 'rm-image-slider';
import {JsPostUpComponent} from './components/js-post-up/js-post-up-component';
import {FamilyLayoutComponent} from './components/family-layout/family-layout.component';


@NgModule({
  declarations: [
    FamilyComponent,
    FamilyLayoutComponent,
    JsPostUpComponent
  ],
  imports: [
    CommonModule,
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

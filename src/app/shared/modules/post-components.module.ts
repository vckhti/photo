import {NgModule} from "@angular/core";
import {CommonModule} from '@angular/common';
import {JsPostUpComponent} from './components/js-post-up/js-post-up-component';


@NgModule({
  declarations: [
    JsPostUpComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    JsPostUpComponent],
})

export class PostComponentsModule {

}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {App} from './app';
import {Services} from './components/services/services';
import {Contacts} from './components/contacts/contacts';
import {Portfolio} from './components/portfolio/portfolio';


const routes: Routes = [
      {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
      {path: 'portfolio', component: Portfolio},
      {path: 'services', component: Services},
    /*  {path: 'product/:id', component: ProductPageComponent},*/
      {path: 'contacts', component: Contacts},
/*      {path: 'category/:slug', component: CategoryPageComponent}*/
/*  ,
  {
    path: 'admin', loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

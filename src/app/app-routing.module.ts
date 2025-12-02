import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Services} from './components/services/services';
import {Contacts} from './components/contacts/contacts';
import {Portfolio} from './components/portfolio/portfolio';


const routes: Routes = [
      {path: '', redirectTo: '/portfolio', pathMatch: 'full'},
      {path: 'portfolio', component: Portfolio},
      {path: 'services', component: Services},
      {path: 'contacts', component: Contacts},
  {
    path: 'family', loadChildren: () => import('./modules/family/family.module').then(m => m.FamilyModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

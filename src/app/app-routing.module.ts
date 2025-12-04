import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {Services} from './components/services/services';
import {Contacts} from './components/contacts/contacts';


const routes: Routes = [
      {path: '', redirectTo: '/about', pathMatch: 'full'},
      {path: 'services', component: Services},
      {path: 'contacts', component: Contacts},
  {
    path: 'portfolio', loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule)
  },
  {
    path: 'family', loadChildren: () => import('./modules/family/family.module').then(m => m.FamilyModule)
  },
  {
    path: 'sport', loadChildren: () => import('./modules/sport/sport.module').then(m => m.SportModule)
  },
  {
    path: 'landscape', loadChildren: () => import('./modules/landscape/landscape.module').then(m => m.LandscapeModule)
  },
  {
    path: 'about', loadChildren: () => import('./modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: '**',
    component: Services,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

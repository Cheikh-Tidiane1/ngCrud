import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AjouterComponent } from './ajouter/ajouter.component';

export const routes: Routes = [
  {
    path: '',
    component: ListeComponent,
    title: "Liste d'article",
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Details Article',
  },
  {
    path: 'liste',
    redirectTo: "",
  },
  {
    path: 'ajouter',
    component: AjouterComponent,
    title: 'ADD',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Oops ! Page Not Found',
  },
  
];

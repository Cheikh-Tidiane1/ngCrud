import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';
import { DetailsComponent } from './details/details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    redirectTo: '',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Oops ! Page Not Found',
  },
];

import { Routes } from '@angular/router';
import { ListeComponent } from './liste/liste.component';

export const routes: Routes = [
    {
        path: "liste",
        component: ListeComponent,
        title: "Liste d'article"
    }
];

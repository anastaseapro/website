import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: AboutComponent,
    canActivate: [ ],
    canActivateChild: [],
    children: []
  }
];

import { Routes } from '@angular/router';

import { BasicColorPage } from '../pages/basic-color/basic-color';
import { BasicRelativeColorsPage } from '../pages/basic-relative-colors/basic-relative-colors';
import { ResourcesPage } from '../pages/resources/resources';

export const routes: Routes = [
  {
    path: '1',
    component: BasicColorPage,
  },
  {
    path: '2',
    component: BasicRelativeColorsPage,
  },
  {
    path: 'resources',
    component: ResourcesPage,
  },
  {
    path: '',
    redirectTo: '1',
    pathMatch: 'full',
  },
];

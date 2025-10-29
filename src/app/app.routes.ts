import { Routes } from '@angular/router';

// import { BasicColorPage } from '../pages/basic-color/basic-color';
// import { BasicRelativeColorsPage } from '../pages/basic-relative-colors/basic-relative-colors';
import { ResourcesPage } from '../pages/resources/resources';
import { PageOrchestrator } from './page-orchestrator';

export const routes: Routes = [
  {
    path: ':pageNumber',
    component: PageOrchestrator,
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

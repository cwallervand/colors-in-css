import { Routes } from '@angular/router';
import { ResourcesPage } from '../pages/resources/resources';
import { PageOrchestrator } from './page-orchestrator/page-orchestrator';
import { AppLayout } from './layout/layout';

export const routes: Routes = [
  {
    path: ':pageNumber',
    component: AppLayout,
    children: [
      {
        path: '',
        component: PageOrchestrator,
      },
      {
        path: 'resources',
        component: ResourcesPage,
      },
    ],
  },
];

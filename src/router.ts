import { lazy } from 'solid-js';
import { createRouter } from '@solidjs/router';

export const Router = createRouter({
  routes: [
    { path: '/', component: lazy(() => import('./pages/Home')) },
    {
      path: '/character-sheet',
      component: lazy(() => import('./pages/CharSheet')),
    },
    { path: '*404', component: lazy(() => import('./pages/NotFound')) },
  ],
});

export const { paths } = Router;

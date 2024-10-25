import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [      
      {
        path: 'providers',
        loadComponent: () => import('./overall-status/service-providers/providers.component')
      },
      {
        path: 'calls',
        loadComponent: () => import('./tele-calling/calls/calls.component')
      },
      {
        path: 'active',
        loadComponent: () => import('./tele-calling/active/active.component')
      },
      {
        path: 'lead',
        loadComponent: () => import('./tele-calling/lead/lead.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiBasicRoutingModule {}

// Angular Import
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// project import
import { AdminComponent } from './theme/layout/admin/admin.component';
import { LoginComponent } from './theme/layout/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: '/analytics',
        pathMatch: 'full'
      },
      {
        path: 'analytics',
        loadComponent: () => import('./fixee/dashboard/dash-analytics.component')
      },      
      {
        path: 'component',
        loadChildren: () => import('./fixee/ui-element/ui-basic.module').then((m) => m.UiBasicModule)
      }
      
    ]
  },
  {
    path: '',
    component: LoginComponent,
    children: [
      {
        path: 'auth/signup',
        loadComponent: () => import('./fixee/authentication/sign-up/sign-up.component')
      },
      {
        path: 'auth/signin',
        loadComponent: () => import('./fixee/authentication/sign-in/sign-in.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

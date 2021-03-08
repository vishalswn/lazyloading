import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
	{ path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
	{ path: 'register', loadChildren: () => import('./register/register.module').then(m => m.RegisterModule) },
	{ path: 'change-password', loadChildren: () => import('./change-password/change-password.module').then(m => m.ChangePasswordModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

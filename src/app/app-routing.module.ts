import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [ 
{ path: '', pathMatch: 'full', redirectTo: 'home'},
{ path: 'login',  loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
{ path: 'home',  loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule)},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations:[],
  providers: []
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
{
  path: 'about',
  loadChildren: () => import('./aboutus/aboutus.module').then(m => m.AboutusModule)
},
{
  path: 'contact',
  loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
},
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { HomeHistoryComponent } from './home-history/home-history.component';
import { HomePreparingComponent } from './home-preparing/home-preparing.component';
import { HomeReadyComponent } from './home-ready/home-ready.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-page',
    pathMatch: 'full'
  },
  { path: 'first-page', component: FirstPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home-preparing', component: HomePreparingComponent },
  { path: 'home-ready', component: HomeReadyComponent },
  { path: 'home-history', component: HomeHistoryComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

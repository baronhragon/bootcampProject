import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'aceptar',
    loadChildren: () => import('./aceptar/aceptar.module').then( m => m.AceptarPageModule)
  },
  {
    path: 'rechazar',
    loadChildren: () => import('./rechazar/rechazar.module').then( m => m.RechazarPageModule)
  },
  {
    path: 'seleccion-invitado',
    loadChildren: () => import('./seleccion-invitado/seleccion-invitado.module').then( m => m.SeleccionInvitadoPageModule)
  },
  {
    path: 'seleccion-restaurante',
    loadChildren: () => import('./seleccion-restaurante/seleccion-restaurante.module').then( m => m.SeleccionRestaurantePageModule)
  },
  {
    path: 'ganador',
    loadChildren: () => import('./ganador/ganador.module').then( m => m.GanadorPageModule)
  },
 {
    path: 'first-page',
    loadChildren: () => import('./first-page/first-page.module').then( m => m.FirstPagePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'forget',
    loadChildren: () => import('./forget/forget.module').then( m => m.ForgetPageModule)
  },
  {
    path: 'invitacion',
    loadChildren: () => import('./invitacion/invitacion.module').then( m => m.InvitacionPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('./modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'modal-invitacion',
    loadChildren: () => import('./modal-invitacion/modal-invitacion.module').then( m => m.ModalInvitacionPageModule)
  },
  {
    path: 'modal-filter',
    loadChildren: () => import('./modal-filter/modal-filter.module').then( m => m.ModalFilterPageModule)
  },
  {
    path: 'historial',
    loadChildren: () => import('./historial/historial.module').then( m => m.HistorialPageModule)
  },
  {
    path: 'fake',
    loadChildren: () => import('./fake/fake.module').then( m => m.FakePageModule)
  },
  {
    path: 'registro-restaurant',
    loadChildren: () => import('./registro-restaurant/registro-restaurant.module').then( m => m.RegistroRestaurantPageModule)
  },
  {
    path: 'contactos',
    
    loadChildren: () => import('./contactos/contactos.module').then( m => m.ContactosPageModule)
  },
  {
    path: 'ganador',
    
    loadChildren: () => import('./ganador/ganador.module').then( m => m.GanadorPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./carta/carta.module').then( m => m.CartaPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'registro-menu',
    loadChildren: () => import('./registro-menu/registro-menu.module').then( m => m.RegistroMenuPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule)
  },


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercadeComponent } from './components/acercade/acercade.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { CrearcuentaComponent } from './components/crearcuenta/crearcuenta.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NoencontradoComponent } from './components/noencontrado/noencontrado.component';
import { PetstoreComponent } from './components/petstore/petstore.component';
import { PotajesComponent } from './components/potajes/potajes.component';
import { ShoppingComponent } from './components/shopping/shopping.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'potajes', component: PotajesComponent},
  {path: 'petstore', component: PetstoreComponent},
  {path: 'admin', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'crear', component: CrearcuentaComponent},
  {path: 'contactanos', component: ContactanosComponent},
  {path: 'acercade', component: AcercadeComponent},
  {path: 'shopping', component: ShoppingComponent},
  {path: '404', component: NoencontradoComponent},
  {path: '**', redirectTo: '404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

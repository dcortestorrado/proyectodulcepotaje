import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { CrearcuentaComponent } from './components/crearcuenta/crearcuenta.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { PetstoreComponent } from './components/petstore/petstore.component';
import { PotajesComponent } from './components/potajes/potajes.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { NoencontradoComponent } from './components/noencontrado/noencontrado.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ShoppingComponent,
    CrearcuentaComponent,
    LoginComponent,
    DashboardComponent,
    AcercadeComponent,
    PetstoreComponent,
    PotajesComponent,
    ContactanosComponent,
    NoencontradoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

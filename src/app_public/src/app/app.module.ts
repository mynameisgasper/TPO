import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { HomePageComponent } from './home-page/home-page.component';
import { VsiOglasiComponent } from './vsi-oglasi/vsi-oglasi.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';
import { RegistracijaComponent } from './registracija/registracija.component';
import { OgledOglasaComponent } from './ogled-oglasa/ogled-oglasa.component';

@NgModule({
  declarations: [
    HomePageComponent,
    VsiOglasiComponent,
    OgrodjeComponent,
    RegistracijaComponent,
    OgledOglasaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomePageComponent
      }, {
        path: 'oglasi',
        component: VsiOglasiComponent
      }, {
        path: 'registracija',
        component: RegistracijaComponent
      }, {
        path: 'ogled-oglasa',
        component: OgledOglasaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }

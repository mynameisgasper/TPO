import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'
import { HomePageComponent } from './components/home-page/home-page.component';
import { VsiOglasiComponent } from './components/vsi-oglasi/vsi-oglasi.component';
import { OgrodjeComponent } from './components/ogrodje/ogrodje.component';
import { RegistracijaComponent } from './components/registracija/registracija.component';
import { OgledOglasaComponent } from './components/ogled-oglasa/ogled-oglasa.component';
import { OglasComponent } from './components/vsi-oglasi/oglas/oglas.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfilUporabnikaComponent } from './components/profil-uporabnika/profil-uporabnika.component';
import { UrejanjeProfilaComponent } from './components/urejanje-profila/urejanje-profila.component';
import { KomentarComponent } from './components/komentar/komentar.component';


@NgModule({
  declarations: [
    HomePageComponent,
    VsiOglasiComponent,
    OgrodjeComponent,
    RegistracijaComponent,
    OgledOglasaComponent,
    OglasComponent,
    NavbarComponent,
    ProfilUporabnikaComponent,
    UrejanjeProfilaComponent,
    KomentarComponent
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
      }, {
        path: 'profil',
        component: ProfilUporabnikaComponent
      }, {
        path: 'urejanje-profila',
        component: UrejanjeProfilaComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }

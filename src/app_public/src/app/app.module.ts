import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'

import { HomePageComponent } from './home-page/home-page.component';
import { VsiOglasiComponent } from './vsi-oglasi/vsi-oglasi.component';
import { OgrodjeComponent } from './ogrodje/ogrodje.component';

@NgModule({
  declarations: [
    HomePageComponent,
    VsiOglasiComponent,
    OgrodjeComponent
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
      }
    ])
  ],
  providers: [],
  bootstrap: [OgrodjeComponent]
})
export class AppModule { }

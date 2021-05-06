import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { HomePageComponent } from './home-page/home-page.component'


@Injectable({
  providedIn: 'root'
})
export class DogwalkersPodatkiService {

  constructor(private http: HttpClient) { }
}

import { Injectable } from '@angular/core';
import {AuthenticationResult} from "../Classes/authenticationResult";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {UserLogin, UserRegister} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  private apiUrl = environment.apiUrl;
  constructor(private http:HttpClient) { }

  public prijava(loginData: UserLogin): Promise<AuthenticationResult> {
    return this.avtentikacija('auth/login', loginData);
  }

  public registracija(registerData: UserRegister): Promise<AuthenticationResult> {
    return this.avtentikacija('auth/register', registerData);
  }

  private avtentikacija(urlNaslov: string, uporabnik: any): Promise<AuthenticationResult> {
    const url: string = `${this.apiUrl}/${urlNaslov}`;
    return this.http
      .post(url, uporabnik)
      .toPromise()
      .then(rezultat => rezultat as AuthenticationResult)
      .catch(this.obdelajNapako);
  }

  /** obdelovanje napake **/
  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}

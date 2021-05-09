import {Inject, Injectable} from '@angular/core';
import {AuthenticationResult} from "../Classes/authenticationResult";
import {AppDataService} from "./app-data.service";
import {SHRAMBA_BRSKALNIKA} from "../Classes/storage";
import {User, UserLogin, UserRegister} from "../Models/User";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private apiUrl = environment.apiUrl+'/auth'

  constructor(@Inject(SHRAMBA_BRSKALNIKA) private storage: Storage,
              private appDataService: AppDataService, private http:HttpClient) { }

  public login(uporabnik: UserLogin): Promise<any> {
    return this.appDataService
      .prijava(uporabnik)
      .then((rezultatAvtentikacije: AuthenticationResult) => {
        this.shraniZeton(rezultatAvtentikacije["jwt"])
          console.log("da bom dojeu")
      });
  }

  public register(uporabnik: UserRegister): Promise<any> {
    return this.appDataService
      .registracija(uporabnik)
      .then((rezultatAvtentikacije: AuthenticationResult) => {
        this.shraniZeton(rezultatAvtentikacije["jwt"]);
        console.log("auth")
      });
  }

  public updatePassword(password: string): Promise<boolean> {
    const url: string = `${this.apiUrl}/pass`;
    console.log("url: "+url)
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.vrniZeton()}`
      })
    };
    return this.http
      .post(url, password, httpHeaders)
      .toPromise()
      .then(rezultat => rezultat as boolean)
      .catch(this.obdelajNapako);
  }

  public odjava(): void {
    localStorage.removeItem('jwt');
  }

  public vrniZeton(): string {
    return localStorage.getItem('jwt');
  }

  public shraniZeton(zeton: string): void {
    localStorage.setItem('jwt', zeton);
  }


  public jePrijavljen(): boolean {
    const zeton: string = this.vrniZeton();
    if (zeton) {
      const usefulinfo = JSON.parse(atob(zeton.split('.')[1]));
      return usefulinfo.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }

  public vrniTrenutnegaUporabnika(): User {
    if (this.jePrijavljen()) {
      const zeton: string = this.vrniZeton();
      const {
        id,
        name,
        surname,
        phone,
        address,
        country,
        email,
        rating,
        role } = JSON.parse(atob(zeton.split('.')[1]));
      return {
        id,
        name,
        surname,
        phone,
        address,
        country,
        email,
        rating,
        role } as User;
    }
  }

  /** obdelovanje napake **/
  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }
}

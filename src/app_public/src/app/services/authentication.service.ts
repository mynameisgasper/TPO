import {Inject, Injectable} from '@angular/core';
import {AuthenticationResult} from "../Classes/authenticationResult";
import {AppDataService} from "./app-data.service";
import {SHRAMBA_BRSKALNIKA} from "../Classes/storage";
import {User, UserLogin, UserRegister} from "../Models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(@Inject(SHRAMBA_BRSKALNIKA) private storage: Storage,
              private appDataService: AppDataService) { }

  public async login(uporabnik: UserLogin): Promise<any> {
    return this.appDataService
      .prijava(uporabnik)
      .then((rezultatAvtentikacije: AuthenticationResult) => {
        this.shraniZeton(rezultatAvtentikacije["jwt"])
      });
  }


  public async register(uporabnik: UserRegister): Promise<any> {
    return this.appDataService
      .registracija(uporabnik)
      .then((rezultatAvtentikacije: AuthenticationResult) => {
        this.shraniZeton(rezultatAvtentikacije["jwt"]);
      });
  }



  public odjava(): void {
    this.storage.removeItem('jwt');
  }

  public vrniZeton(): string {
    return this.storage.getItem('jwt');
  }

  public shraniZeton(zeton: string): void {
    this.storage.setItem('jwt', zeton);
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
        role } = JSON.parse(atob(zeton.split('.')[1]));
      return {
        id,
        name,
        surname,
        phone,
        address,
        country,
        email,
        role } as User;
    }
  }
}

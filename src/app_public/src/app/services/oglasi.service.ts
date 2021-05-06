import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {AuthenticationService} from "./authentication.service";
import {Oglas, OglasCreate, OglasUpdate} from "../Models/Oglas";

@Injectable({
  providedIn: 'root'
})
export class OglasiService {

  private apiUrl = environment.apiUrl+'/oglas'

  constructor(private http:HttpClient, private authService:AuthenticationService) { }


  // pridobi vse uporabnike iz podatkovne baze
  public getAll(): Promise<Oglas[]> {
    //todo implementiraj filtering
    const url: string = this.apiUrl;
    console.log('GET ',url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Oglas[])
      .catch(this.obdelajNapako);
  }

  //pridobi dolocenega uporabnika iz podatkovne baze
  public getOne(id:string): Promise<Oglas> {
    const url: string = this.apiUrl+`/${id}`;
    console.log('GET ',url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Oglas)
      .catch(this.obdelajNapako);
  }

  /** od tuki naprej rabmo avtentikacijo **/
  //ustvari uporabnika s podanimi polji
  public create(data:OglasCreate): Promise<Oglas> {
    const url: string = this.apiUrl;
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    console.log('POST ',url);
    return this.http
      .post(url,data, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as Oglas)
      .catch(this.obdelajNapako);
  }

  //posodobi uporabnika s podanimi polji (MORA BITI PRISOTEN _id!!!!!!)
  public update(data:OglasUpdate,id:string): Promise<Oglas> {
    const url: string = this.apiUrl+`/${id}`;
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    console.log('PUT ',url);
    return this.http
      .put(url,data, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as Oglas)
      .catch(this.obdelajNapako);
  }

  //izbrise dolocenega uporabnika
  public deleteOne(id:string): Promise<Object> {
    const url: string = this.apiUrl+`/${id}`;
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    console.log('DELETE ',url);
    return this.http
      .delete(url, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor)
      .catch(this.obdelajNapako);
  }


  /** obdelovanje napake **/
  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }


}

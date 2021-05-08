import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {User} from "../Models/User";
import {Comment} from "../Models/Comment";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl+'/user'

  constructor(private http:HttpClient, private authService:AuthenticationService) { }

  public getOne(id:string): Promise<User> {
    const url: string = this.apiUrl+`/${id}`
    console.log('GET', url)
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako)
  }

  public getAll(): Promise<User[]> {
    const url: string = this.apiUrl
    console.log('GET', url)
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as User[])
      .catch(this.obdelajNapako)
  }

  public createComment(data:Comment, id:string): Promise<User> {
    const url: string = this.apiUrl+'/comment?userId='+`${id}`
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    console.log('POST', url)
    return this.http
      .post(url, data, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako)
  }

  public deleteComment(id_user:string, id_comment:string):Promise<User> {
    const url: string = this.apiUrl+'/comment?userId='+`${id_user}`+ '&commentId='+ `${id_comment}`
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };

    console.log('DELETE', url)
      return this.http
        .delete(url, httpHeaders)
        .toPromise()
        .then(odgovor => odgovor as User)
        .catch(this.obdelajNapako)
    }

  public getComments(id_user:string):Promise<User> {
    const url: string = this.apiUrl+'/comment?userId='+`${id_user}`
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    console.log('GET', url)
    return this.http
      .get(url, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako)
  }

  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }

}

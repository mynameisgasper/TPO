import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationService} from "./authentication.service";
import {User, UserPublic} from "../Models/User";
import {Comment} from "../Models/Comment";
import {AuthenticationResult} from "../Classes/authenticationResult";
import {Oglas} from "../Models/Oglas";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl+'/user'

  constructor(private http:HttpClient, private authService:AuthenticationService) { }

  public getOne(id:string): Promise<UserPublic> {
    const url: string = this.apiUrl+`/${id}`
    console.log('GET', url)
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as UserPublic)
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

  public getOglasiProfila(userId: string): Promise<Oglas[]> {
    const url: string = this.apiUrl + '/oglasi?userId='+`${userId}`
    console.log('GET, ', url)

    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };

    return this.http
      .get(url, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as Oglas[])
      .catch(this.obdelajNapako)
  }


  public createComment(data:Comment, userId:string): Promise<User> {
    const url: string = this.apiUrl+'/comment?userId='+`${userId}`
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

  public getComments(id_user:string):Promise<Comment[]> {
    const url: string = this.apiUrl+'/comment?userId='+`${id_user}`
    const httpHeaders = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    console.log('GET', url)
    return this.http
      .get(url, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as Comment[])
      .catch(this.obdelajNapako)
  }

  public editUser(idUser: string, newUser: User): Promise<AuthenticationResult> {
    const url: string = `${this.apiUrl}/${idUser}`;
    console.log("url: "+url)
    //auth
    const httpHeaders = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };

    return this.http
      .put(url,newUser,httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as AuthenticationResult)
      .catch(this.obdelajNapako)
  }

  public podajOceno(idUser: string, ocena: number): Promise<User> {
    const url: string = `${this.apiUrl}/rating?userId=`+idUser;
    console.log("url: "+url)
    //auth
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    return this.http
      .post(url,{rating: ocena},httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako)
  }

  public addContact(idUser: string): Promise<string> {
    const url: string = this.apiUrl+'/contact?userId='+`${idUser}`
    console.log("url:" + url)
    console.log(this.authService.vrniZeton())

    const httpHeaders = {
      headers: new HttpHeaders({
        'authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    return this.http
      .post(url, {}, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as string)
      .catch(this.obdelajNapako)
  }

  public deleteContact(idUser: string): Promise<User> {
    const url: string = this.apiUrl+'/contact?userId='+`${idUser}`
    console.log("url:" + url)
    const httpHeaders = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.authService.vrniZeton()}`
      })
    };
    return this.http
      .delete(url, httpHeaders)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako)
  }


  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }



}

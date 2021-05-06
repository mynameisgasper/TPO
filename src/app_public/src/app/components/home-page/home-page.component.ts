import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { UserLogin } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  password:string;
  email:string;

  constructor(private authServis:AuthenticationService, private router:Router) {}


  @ViewChild('emailInput') emailInput: ElementRef;
  @ViewChild('passwordInput') passwordInput: ElementRef;


  ngOnInit(): void {
  }

  login(){
    this.email = this.emailInput.nativeElement.value
    this.password = this.passwordInput.nativeElement.value
    let userLogin:UserLogin = {email: this.email, password: this.password}
    console.log(userLogin)
    this.authServis.login(userLogin).then(r => {
      this.router.navigate(["profil"]).then(r => {console.log("preusmerjeno")})

      console.log("uspešn vpis")
    }).catch(err => {
      console.error(err)
      alert("neuspešna prijava, glej konzolo")
    })
  }

  logout(){
    this.authServis.odjava()
    window.location.reload()
  }
}

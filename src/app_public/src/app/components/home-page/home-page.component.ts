import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  password:string = ""
  email:string = ""

  constructor(private authServis:AuthenticationService, private router:Router) {

  }

  ngOnInit(): void {
  }

  login(){
    let userLogin:UserLogin = {email: this.email, password: this.password}
    this.authServis.login(userLogin).then(r => {
      this.router.navigate(["profil"])
    }).catch(err => {
      console.error(err)
      alert("neuspešna prijava, glej konzolo")
    })
  }
}

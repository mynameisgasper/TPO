import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";
import {User} from "../../Models/User"

@Component({
  selector: 'app-hitri-kontakti',
  templateUrl: './hitri-kontakti.component.html',
  styleUrls: ['./hitri-kontakti.component.css']
})
export class HitriKontaktiComponent implements OnInit {

  constructor(private authService:AuthenticationService, private router:Router, private userService:UserService) { }

  user:User
  contacts:String[]

  ngOnInit(): void {
    this.getUser()
    console.log(this.user)
    this.contacts = this.user.contacts

  }

  getUser(){
    this.user = this.authService.vrniTrenutnegaUporabnika()
  }



}

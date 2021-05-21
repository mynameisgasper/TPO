import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authServis:AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.authServis.odjava()
    window.location.reload()
  }

  jePrijavljen(){
    return this.authServis.jePrijavljen()
  }

  vrniNaOglase(){
    this.router.navigate(['/oglasi'])
  }

}

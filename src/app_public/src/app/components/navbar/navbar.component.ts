import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authServis:AuthenticationService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authServis.odjava()
    window.location.reload()
  }

  jePrijavljen(){
    return this.authServis.jePrijavljen()
  }

}

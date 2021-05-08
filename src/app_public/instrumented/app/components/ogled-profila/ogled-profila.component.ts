import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-ogled-profila',
  templateUrl: './ogled-profila.component.html',
  styleUrls: ['./ogled-profila.component.css']
})
export class OgledProfilaComponent implements OnInit {

  user:User

  constructor() { }

  ngOnInit(): void {

    this.pridobiPodatkeUporabnika()
  }

  pridobiPodatkeUporabnika(){
    // TODO: dobi podatke profila, ki si ga nekdo ogleduje
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-urejanje-profila',
  templateUrl: './urejanje-profila.component.html',
  styleUrls: ['./urejanje-profila.component.css']
})
export class UrejanjeProfilaComponent implements OnInit {

  user:User

  constructor(private authServis:AuthenticationService) { }

  ngOnInit(): void {
    this.pridobiPodatkeUporabnika()
  }

  pridobiPodatkeUporabnika(){
    this.user = this.authServis.vrniTrenutnegaUporabnika()
  }

}

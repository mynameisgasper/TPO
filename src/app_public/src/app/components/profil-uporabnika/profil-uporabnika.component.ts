import { Route } from '@angular/compiler/src/core';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Comment } from "../../Models/Comment";


@Component({
  selector: 'app-profil-uporabnika',
  templateUrl: './profil-uporabnika.component.html',
  styleUrls: ['./profil-uporabnika.component.css']
})
export class ProfilUporabnikaComponent implements OnInit {

  user:User
  
  komentarji:Comment[] = []

  constructor(private authServis:AuthenticationService, private router:Router, private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    if(!this.authServis.jePrijavljen()){
      this.router.navigate(['..'],{relativeTo:this.route})
    }

    //todo pridobi vse oglase iz backenda
    this.pridobiVseKomentarje()
    this.pridobiPodatkeUporabnika()
  }

  pridobiVseKomentarje(){
    //TODO
  }

  pridobiPodatkeUporabnika(){
    this.user = this.authServis.vrniTrenutnegaUporabnika()
  }

}

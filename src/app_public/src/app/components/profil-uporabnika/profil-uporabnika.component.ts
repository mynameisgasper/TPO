import { Route } from '@angular/compiler/src/core';
import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/Models/User';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Comment } from "../../Models/Comment";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-profil-uporabnika',
  templateUrl: './profil-uporabnika.component.html',
  styleUrls: ['./profil-uporabnika.component.css']
})
export class ProfilUporabnikaComponent implements OnInit {

  user:User
  comment:Comment = new Comment
  comments:Comment[]

  constructor(private userService:UserService, private authServis:AuthenticationService, private router:Router, private route:ActivatedRoute) { }

  @ViewChild('inputVsebinaKomentarja') vsebinaKomentarja: ElementRef;


  ngOnInit(): void {
    if(!this.authServis.jePrijavljen()){
      this.router.navigate(['..'],{relativeTo:this.route})
    }else{

      this.pridobiPodatkeUporabnika()
      this.pridobiVseKomentarje()

      //todo pridobi vse oglase iz backenda
    }
  }

  pridobiVseKomentarje(){
    this.userService.getComments(this.user.id).then(comments=>{
      this.comments = comments
    }).catch(err=>{
      console.log(err)
      alert("napaka pri pridobivanju komentarjev")
    })
  }

  pridobiPodatkeUporabnika(){
    this.user = this.authServis.vrniTrenutnegaUporabnika()
    console.log(this.user)
  }

  dodajHitriKontakt(){

  }


}

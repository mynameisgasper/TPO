import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User, UserPublic} from 'src/app/Models/User';
import {Comment} from 'src/app/Models/Comment'
import { AuthenticationService } from 'src/app/services/authentication.service';
import {UserService} from "../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ogled-profila',
  templateUrl: './ogled-profila.component.html',
  styleUrls: ['./ogled-profila.component.css']
})
export class OgledProfilaComponent implements OnInit {
  user:UserPublic
  id:string
  comment:Comment = new Comment

  constructor(private userService:UserService, private route:ActivatedRoute, private router:Router, private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.pridobiPodatkeUporabnika(this.id)

    if(this.id === this.authService.vrniTrenutnegaUporabnika().id) {
      this.router.navigate(['profil'])
    }
  }

  @ViewChild('inputVsebinaKomentarja') vsebinaKomentarja: ElementRef;

  pridobiPodatkeUporabnika(id:string){
    this.userService.getOne(id).then((result:UserPublic)=> {
      this.user = result
    }).catch(err => {
      alert("Ne najdem uporabnika")
      console.error(err)
    })
  }

  get prijavljenUporabnik(){
    return this.authService.vrniTrenutnegaUporabnika().email
  }

  createComment(){
    this.comment.owner = this.authService.vrniTrenutnegaUporabnika().email
    this.comment.content = this.vsebinaKomentarja.nativeElement.value

    this.userService.createComment(this.comment, this.id).then((result:User)=> {
      window.location.reload()
    }).catch(err => {
      alert("Dodajanje komentarja neuspešno!")
      console.error(err)
    })
  }

  deleteComment(comment_id: string) {
    console.log(this.id)
    console.log(comment_id)

    this.userService.deleteComment(this.id, comment_id).then((result:User)=>{
      window.location.reload()
    }).catch(err => {
      alert("Brisanje komentarja neuspešno!")
      console.error(err)
    })
  }


}

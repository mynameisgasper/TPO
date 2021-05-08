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
  }


  /** @kaj_je_ta_koda_od_tukaj_naprej?
   * @nelogicno...
   * @ne_razumem.
   */

  //zakaj bi uporabnik sam na svojem profilu ustvarjal in brisal komentarje?
  createComment(){
    this.comment.owner = this.authServis.vrniTrenutnegaUporabnika().email
    this.comment.content = this.vsebinaKomentarja.nativeElement.value

    this.userService.createComment(this.comment, this.id).then((result:User)=> {
      window.location.reload()
    }).catch(err => {
      alert("Dodajanje komentarja neuspešno!")
      console.error(err)
    })
  }

  //uporabnik ne more sam seb brisat komentarja
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
